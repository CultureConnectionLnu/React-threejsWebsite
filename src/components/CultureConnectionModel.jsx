import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

export function Model(props) {
  const { nodes } = useGLTF("models/cultureConnection2.glb");
  const { section } = props;
  // Create new materials
  const greenMaterial = new THREE.MeshStandardMaterial({ color: "green" });
  const blueMaterial = new THREE.MeshStandardMaterial({ color: "blue" });
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: "white" });
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: "black",
    side: THREE.BackSide,
  });

  return (
    <motion.group
      {...props}
      dispose={null}
      animate={{
        y: section === 0 ? 0 : 10,
      }}
      transition={{
        duration: 2,
      }}
    >
      <motion.group
        position={[0.006, 0, -0.812]}
        rotation={[0, -0.889, 0]}
        scale={2.503}
      >
        {/* Main Sphere004 mesh with blue material */}
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={blueMaterial}
          scale={0.95}
        />
        {/* Sphere004_1 with green material */}
        <mesh
          geometry={nodes.Sphere004_1.geometry}
          material={greenMaterial}
          scale={0.95}
        />
      </motion.group>
      {/* Left hand */}
      <mesh
        geometry={nodes.Plane.geometry}
        material={whiteMaterial}
        position={[-2.296, 0.207, 1.273]}
        rotation={[Math.PI / 2, 0, 0.315]}
        scale={[0.284, 1.237, 1.048]}
      />
      {/* LeftCup */}
      <mesh
        geometry={nodes.Sphere.geometry}
        material={whiteMaterial}
        position={[-0.738, 0.8, 1.964]}
        rotation={[-2.967, 0.426, 3.127]}
        scale={[0.476, 0.605, 0.476]}
      />
      {/* Outline for LeftCup */}
      <mesh
        geometry={nodes.Sphere.geometry}
        material={outlineMaterial}
        position={[-0.738, 0.8, 1.964]}
        rotation={[-2.967, 0.426, 3.127]}
        scale={[0.496, 0.625, 0.496]}
      />
      {/* rightHand */}
      <mesh
        geometry={nodes.Plane001.geometry}
        material={whiteMaterial}
        position={[2.244, 0.207, 1.062]}
        rotation={[-Math.PI / 2, 0, 0.523]}
        scale={[-0.284, -1.237, -1.048]}
      />
      {/* rightCup */}
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={whiteMaterial}
        position={[0.74, 0.8, 1.863]}
        rotation={[0.554, 0.283, -0.11]}
        scale={[0.476, 0.605, 0.476]}
      />
      {/* Outline for rightCup */}
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={outlineMaterial}
        position={[0.74, 0.8, 1.863]}
        rotation={[0.554, 0.283, -0.11]}
        scale={[0.496, 0.625, 0.496]}
      />
    </motion.group>
  );
}

useGLTF.preload("/cultureConnection2.glb");
