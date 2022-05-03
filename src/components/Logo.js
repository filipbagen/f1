import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import path from '../glb/logga3d.glb'

export default function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(path);
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // 0.3 - (1 + Math.sin(t / 4)) / 8
    ref.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 8, 0)
    ref.current.position.y = (1 + Math.sin(t / 2)) / 10
  })
  return (
    <group ref={ref} {...props} dispose={null}
    
    
    scale={0.6}
    >
      <mesh
        castShadow={false}
        receiveShadow={false}
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}

        position={[0, 2.5, -0.03]}
        rotation={[1.9, 0, 0 ]}

      />
    </group>
  );
}

useGLTF.preload(path);