import React from "react";
import { Model } from "./CultureConnectionModel";
import { motion } from "framer-motion-3d";
import OrbitingSphere from "./OrbitingSphere";

const pageNames = ["Events", "Social Media", "Weekly", "Sponsors"];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];
const orbitRadius = [1.5, 1.8, 2.1, 2.4]; // Reduced distances

const Experience = ({ section }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <motion.group
        position={[0, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[30, 0, 0]}
        animate={{
          rotateY: section * 10,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Model />
      </motion.group>

      {pageNames.map((name, index) => (
        <OrbitingSphere
          key={index}
          name={name}
          index={index}
          color={colors[index]}
          radius={orbitRadius[index]}
          length={pageNames.length}
        />
      ))}
    </>
  );
};

export default Experience;
