const Section = (props) => {
  const { children } = props;
  return (
    <selection
      className={"h-screen w-screen p-16 max-w-screen-2xl max-auto flex flex-col items-start justify-center"}
    >
      {children}
    </selection>
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
      <h1 className=" bg-slate-500 text-4xl font-bold text-gray-900 mb-4">
        Culture Connection!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover and engage with diverse cultures <br />
        from around the world. Join us to explore, <br />
        learn, and connect through shared experiences and stories.
      </p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Buy Subscription
      </button>
    </Section>
  );
};
const EventSection = () => {
  return (
    <Section>
      <h1>Event</h1>
    </Section>
  );
};
const SocialmediaSection = () => {
  return (
    <Section>
      <h1>Social Media</h1>
    </Section>
  );
};
const WeeklySection = () => {
  return (
    <Section>
      <h1>Weekly event cards</h1>
    </Section>
  );
};
const SponsorseSection = () => {
  return (
    <Section>
      <h1>Sponsorse Planets</h1>
    </Section>
  );
};
