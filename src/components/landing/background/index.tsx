"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience";

export default function Background() {
  return (
    <div className="app_canvas_container">
      <Canvas>
        {/* <color attach="background" args={["#eee"]} /> */}
        <Experience />
      </Canvas>
    </div>
  );
}
