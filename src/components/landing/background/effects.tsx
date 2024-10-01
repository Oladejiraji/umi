import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import React from "react";

export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur={!false} luminanceThreshold={0.3} />
      <Noise opacity={0.025} />
    </EffectComposer>
  );
}
