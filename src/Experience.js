import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import BasicSphereParticles from "./BasicSphereParticles";
import CustomGeometryParticles from "./CustomGeometryParticles";
import ShaderParticles from "./AnimatedParticlesWithShader.jsx";
export default function Experience() {
  useFrame((state, delta) => {});

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      {/*<CustomGeometryParticles shape="sphere" />*/}
      <ShaderParticles shape="sphere" />
    </>
  );
}
