const Section = (props) => {
  const { children } = props;
  return <Selection>{children}</Selection>;
};

export const Interface = () => {
  return (
    <>
      <Section>
        <h1>Culture Connection!</h1>
      </Section>
      <Section>
        <h1>Events</h1>
      </Section>
      <Section>
        <h1>Social Media</h1>
      </Section>
      <Section>
        <h1>WeeklyCard</h1>
      </Section>
      <Section>
        <h1>Sponsorse</h1>
      </Section>
    </>
  );
};
