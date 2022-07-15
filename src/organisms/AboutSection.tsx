import { Typography } from "../atoms";
import { Section } from "../organisms";


const AboutSection = () => {
  return (
    <Section title="About Me">
      <Typography variant="p">
        I graduated from <strong>NC State University in May of 2017 with degrees in
        Computer and Electrical Engineering</strong>. Throughout my college career, I
        founded and co-founded two companies, Best in the Verse Audio, and Kast
        Clothing. My experience as an entrepreneur has given me skills in
        product development, creating things like custom jeans, 3D printed
        earphones, and audiophile headphone cables. After graduating, I received
        funding through NC State as an Entrepreneurship Initiative Fellow,
        allowing me to pursue my startups and participate in the Andrew's Launch
        Accelerator program.
      </Typography>
      <Typography variant="p">
        My career as a professional software engineer has run the full gamut of
        the software development process, from designing and prototyping, to
        architecting high-quality, production-level code through test-driven
        development, to software testing and verification to ensure software
        meets specifications. I have also served as a technical lead and mentor
        to other members my various software teams.
      </Typography>
      <Typography variant="p">
        In my spare time, I keep myself busy with creating fictional worlds,
        creating fantasy maps using GIS/Cartography principles, writing Science
        Fiction/Fantasy stories, creating art and photographs, and learning
        about all things related to 3D printing, 3D modeling, and virtual
        reality.
      </Typography>

    </Section>
  );
};

export default AboutSection;
