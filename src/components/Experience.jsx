import { Model } from "./CultureConnectionModel";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  const { section } = props;

  return (
    <>
      <ambientLight intensity={10} />
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
    </>
  );
};
