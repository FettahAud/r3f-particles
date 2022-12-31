import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function CustomGeometryParticles({ shape }) {
  const count = 2000;
  const points = useRef();
  const particlesPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }
    if (shape === "sphere") {
      const distance = 0.5;

      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(10);
        const phi = THREE.MathUtils.randFloatSpread(10);

        let x = distance * Math.cos(theta) * Math.sin(phi);
        let y = distance * Math.cos(theta) * Math.cos(phi);
        let z = distance * Math.sin(theta);

        positions.set([x, y, z], i * 3);
      }
    }
    return positions;
  }, [count]);
  //   useFrame(({ clock }) => {
  //     for (let i = 0; i <= count; i++) {
  //       const i3 = i * 3;
  //       points.current.geometry.attributes.position.array[i3] +=
  //         Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //       points.current.geometry.attributes.position.array[i3 + 1] +=
  //         Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //       points.current.geometry.attributes.position.array[i3 + 2] +=
  //         Math.sin(clock.elapsedTime + Math.random() * 10) * 0.01;
  //     }
  //     points.current.geometry.attributes.position.needsUpdate = true;
  //   });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
