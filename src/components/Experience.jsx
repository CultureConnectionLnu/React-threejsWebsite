import React, { useMemo } from "react";
import { Model } from "./CultureConnectionModel";
import { motion } from "framer-motion-3d";
import OrbitingSphere from "./OrbitingSphere"; // Use OrbitingSphere for text
import { CatmullRomCurve3, Vector3 } from "three";
import { Line } from "@react-three/drei";

const pageNames = ["Events", "Social Media", "Weekly", "Sponsors"];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];
const orbitRadius = [1.6, 2.3, 3, 3.7]; // Semi-major axis lengths
const orbitMinorRadius = [0.5, 0.8, 0.9, 1.1]; // Semi-minor axis lengths
const speeds = [0.00085, 0.00087, 0.00089, 0.00081]; // Different speeds for variety
const heightVariations = [2.5, 3.2, 3.6, 4.3]; // Different height variations for 3D effect

const Experience = ({ section, setSection }) => {
  const curves = useMemo(() => {
    return pageNames.map((_, index) => {
      const points = new Array(100).fill(0).map((_, i) => {
        const angle = (i / 100) * Math.PI * 2;
        const x = orbitRadius[index] * Math.cos(angle);
        const z = orbitMinorRadius[index] * Math.sin(angle);
        const y = heightVariations[index] * Math.sin(angle);
        return new Vector3(x, y, z);
      });
      return new CatmullRomCurve3(points, true);
    });
  }, []);

  const handleClick = (index) => {
    setSection(index + 1);
  };

  return (
    <>
      <ambientLight intensity={0.8} />
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
        <React.Fragment key={index}>
          <Line
            points={curves[index].getPoints(100)}
            color={colors[index]}
            lineWidth={1}
          />
          <OrbitingSphere
            name={name}
            color={colors[index]}
            curve={curves[index]}
            speed={speeds[index]}
            onClick={handleClick}
            index={index}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Experience;
