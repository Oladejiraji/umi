"use client";
import React, { Fragment, useRef } from "react";
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

export default function Experience() {
  const meshRef = useRef<Mesh<
    BufferGeometry<NormalBufferAttributes>,
    Material | Material[],
    Object3DEventMap
  > | null>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    // meshRef.current.rotation.y += 0.005;
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
