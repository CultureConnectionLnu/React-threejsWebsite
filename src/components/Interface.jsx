import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className="h-screen w-screen p-16 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, delay: 0.5 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <TopSection />
      <EventSection />
      <SocialmediaSection />
      <WeeklySection />
      <SponsorseSection />
    </div>
  );
};

const TopSection = () => {
  return (
    <Section>
      
    </Section>
  );
};
const EventSection = () => {
  return (
    <Section>
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
    </Section>
  );
};

const SocialmediaSection = () => {
  return (
    <Section>
      <motion.h1
        className=" bg-slate-500 text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.3 },
        }}
      >
        Social Media Section
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
        Connect with us on social media and stay updated with the latest news, events, and activities. Follow us and join the conversation.
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
        Follow Us
      </motion.button>
    </Section>
  );
};

const WeeklySection = () => {
  return (
    <Section>
      <motion.h1
        className=" bg-slate-500 text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.3 },
        }}
      >
        Weekly Event Cards
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
        Discover our weekly events and activities. Don't miss out on any upcoming events. Stay tuned for more!
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
        View Weekly Events
      </motion.button>
    </Section>
  );
};

const SponsorseSection = () => {
  return (
    <Section>
      <motion.h1
        className=" bg-slate-500 text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.5, delay: 0.3 },
        }}
      >
        Sponsorship Section
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
        Learn about our sponsorship opportunities and how you can support our events and activities. Join us in making a difference.
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
        Become a Sponsor
      </motion.button>
    </Section>
  );
};
