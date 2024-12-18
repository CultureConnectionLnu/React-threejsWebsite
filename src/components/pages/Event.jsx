import { motion } from "framer-motion-3d";

const Event = () => {

  return (
    <>
      <motion.h1
        className=" bg-slate-500 text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.3 },
        }}
      >
        Event Section
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.6 },
        }}
      >
        Explore various events happening around the world. Join us to attend, learn, and participate in exciting events.
      </motion.p>
      <motion.button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.9 },
        }}
      >
        View Events
      </motion.button>
    </>
  );
};

export default Event;