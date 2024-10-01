import React from "react";
import * as THREE from "three";

interface IProps {
  width: number;
  height: number;
  radius: number;
}

export default function RoundedRect(props: IProps) {
  const { height, radius, width } = props;

  const shape = new THREE.Shape();

  // Define rounded rectangle shape
  shape.moveTo(-width / 2 + radius, -height / 2);
  shape.lineTo(width / 2 - radius, -height / 2);
  shape.quadraticCurveTo(
    width / 2,
    -height / 2,
    width / 2,
    -height / 2 + radius,
  );
  shape.lineTo(width / 2, height / 2 - radius);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
  shape.lineTo(-width / 2 + radius, height / 2);
  shape.quadraticCurveTo(
    -width / 2,
    height / 2,
    -width / 2,
    height / 2 - radius,
  );
  shape.lineTo(-width / 2, -height / 2 + radius);
  shape.quadraticCurveTo(
    -width / 2,
    -height / 2,
    -width / 2 + radius,
    -height / 2,
  );

  const geometry = new THREE.ShapeGeometry(shape);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#1e1e1e" />
    </mesh>
  );
}
