"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Billboard,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  Vector3,
} from "three";
import RoundedRect from "./rounded-rect";
import { bgCards } from "@/utils/static";
import Effects from "./effects";
import { easing } from "maath";

const RADIUS = 5;
const MOUSE_POSITION_FACTOR = 1000;

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const meshRef = useRef<Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  > | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX - window.innerWidth / 2) / MOUSE_POSITION_FACTOR,
        y: (event.clientY - window.innerHeight / 2) / MOUSE_POSITION_FACTOR,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, dt) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(mousePosition.x) * RADIUS,
        Math.atan(mousePosition.y) * RADIUS,
        Math.cos(mousePosition.x) * RADIUS,
      ],
      0.25,
      dt,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Fragment>
      <OrbitControls />

      <mesh position={[0, 0, 0]} ref={meshRef}>
        <mesh>
          <pointLight intensity={20} color="#fff" power={300} />
          <Sphere args={[0.2, 32, 32]}>
            {/* <meshStandardMaterial
              emissive={0xffffee}
              emissiveIntensity={1}
              color={0x000000}
            /> */}

            <MeshDistortMaterial color={"#fff"} radius={1} distort={1} />
          </Sphere>
        </mesh>
        {/* <Sphere args={[0.2, 40, 40]}>
          <MeshDistortMaterial color={"#fff"} radius={1} distort={1} />
        </Sphere> */}

        {bgCards.map((item) => (
          <Billboard key={item.id} position={new Vector3(...item.position)}>
            <RoundedRect
              height={item.height}
              width={item.width}
              radius={item.radius}
            />
          </Billboard>
        ))}
      </mesh>

      <ambientLight intensity={3} />
      <Effects />
    </Fragment>
  );
}
