import React, { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";

const OrbitingSphere = ({ name,color, curve, speed }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      const t = (ref.current.userData.t += speed);
      const position = curve.getPointAt(t % 1);
      ref.current.position.copy(position);

      // Rotate around the z-axis
      ref.current.rotation.z += speed;
    }
  });

  useLayoutEffect(() => {
    ref.current.userData.t = Math.random();
  }, []);

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Billboard>
        <Text position={[0, 0.45, 0]} fontSize={0.3} color="#FFFFFF" anchorX="top" anchorY="middle">
          {name}
        </Text>
      </Billboard>
    </group>
  );
};

export default OrbitingSphere;
