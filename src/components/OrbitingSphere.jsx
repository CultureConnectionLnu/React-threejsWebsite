import React, { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Spherical, Vector3 } from "three";

const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
const mix = (a, b, t) => a * (1 - t) + b * t;

const OrbitingSphere = ({ name, index, color, radius, length }) => {
  const ref = useRef();
  const distance = radius;
  const yAngle = mix(degreesToRadians(30), degreesToRadians(150), Math.random());
  const xAngle = degreesToRadians(360) * (index / length);
  const speed = Math.random() * 0.01 + 0.005; // Random speed for each element

  useLayoutEffect(() => {
    if (ref.current) {
      const spherical = new Spherical(distance, yAngle, xAngle);
      const position = new Vector3().setFromSpherical(spherical);
      ref.current.position.set(position.x, position.y, position.z);
    }
  }, [distance, yAngle, xAngle]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed;
      const angle = ref.current.rotation.y;
      const x = distance * Math.cos(angle);
      const z = distance * Math.sin(angle);
      ref.current.position.set(x, distance * Math.sin(yAngle), z);
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={color} />
        <Html>
          <div style={{ color: 'black', background: 'white', padding: '5px', borderRadius: '5px' }}>
            {name}
          </div>
        </Html>
      </mesh>
    </group>
  );
};

export default OrbitingSphere;
