import { Section } from "../organisms";
import { Project } from "../molecules";
import { Image, Typography } from "../atoms";
import calamus from "../assets/calamus-project.png";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { LogoElectron } from "@styled-icons/ionicons-solid/LogoElectron";

const badgeProps = {
  size: "15px",
};

const ProjectSection = () => {
  return (
    <Section title="Projects">
      <Project
        title="Calamus"
        subTitle="Electron Application for writing and publishing novels"
        badges={[
          { name: "Typescript", icon: <Typescript {...badgeProps} /> },
          { name: "ReactJS", icon: <ReactLogo {...badgeProps} /> },
          { name: "Electron", icon: <LogoElectron {...badgeProps} /> }
        ]}
        demo={<Image src={calamus} width="100%" />}
      >
        <Typography variant="span">
          Calamus is a multi-platform desktop application build with Electron
          and Typescript for writing and publishing novels. It features an open,
          plain-text json project file format for storing book content and
          publishing information. Calamus transforms plain-text Markdown content
          into publish-ready eBooks and print-ready PDFs.
        </Typography>
      </Project>
      <Project
        title="Audibooks"
        subTitle="Android Application for listening to audiobook"
      >
        <Typography variant="p">
          Audibooks was my first Android app, built in Android Studio using Java
          and a smidge of SQLite. Building the app gave me a good understanding
          of implementing media services, custom ArrayLists, SQLite Databases,
          user prefs, Material Design, JSON Queries, crash reporting and
          testing, and using GitHub.
        </Typography>
      </Project>
    </Section>
  );
};

export default ProjectSection;
