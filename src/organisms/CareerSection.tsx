import { Section } from "../organisms";
import { Plexus, Garmin, Kast, BestInTheVerse } from "../molecules";
const CareerSection = () => {
  return (
    <Section title="Career">
      <Garmin />
      <Plexus />
      <Kast />
      <BestInTheVerse />
    </Section>
  );
};

export default CareerSection;
