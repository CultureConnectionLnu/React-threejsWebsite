import { Model } from "./CultureConnectionModel";
import { motion } from "framer-motion-3d";

const Experience = ({ section, setSection }) => {

  const handleClick = (index) => {
    setSection(index + 1);
  };

  return (
    <>
      <ambientLight intensity={0.8} />
      <motion.group
        position={[0, 0, -1]}
        scale={[0.6, 0.6, 0.6]}
        rotation={[30,0,0]}
        animate={{
          rotateY: [-0.7, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut",
        }}
      >
        <Model section={section} />
      </motion.group>
    </>
  );
};

export default Experience;