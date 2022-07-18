import styled from "styled-components";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Gatsby } from "@styled-icons/remix-line/Gatsby";
import { LogoElectron } from "@styled-icons/ionicons-solid/LogoElectron";
import { Android } from "@styled-icons/fa-brands/Android";
import { Java } from "@styled-icons/fa-brands/Java";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Pypi } from "@styled-icons/simple-icons/Pypi";

import { Section } from "../organisms";
import { Project } from "../molecules";
import { Image, Typography, Link } from "../atoms";

import calamus from "../assets/calamus-project.png";
import hannumEverAfter from "../assets/hannum-ever-after.png";
import theDarkBetween from "../assets/the-dark-between.png";
// @ts-ignore
import audibooks1 from "../assets/audibooks_1.mp4";
// @ts-ignore
import audibooks2 from "../assets/audibooks_2.mp4";
import Video from "../atoms/Video";

const badgeProps = {
  size: "15px",
};

const DemoContainer = styled.div`
  background-color: black;
  border-radius: 10px;
  padding: 40px;
  max-height: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const ProjectSection = () => {
  return (
    <Section title="Projects">
      <Project
        title="Calamus"
        githubLink="https://github.com/midnightprioriem/calamus"
        siteLink="https://www.calamus.app"
        subTitle="Electron Application for writing and publishing novels"
        badges={[
          { name: "Typescript", icon: <Typescript {...badgeProps} /> },
          { name: "ReactJS", icon: <ReactLogo {...badgeProps} /> },
          { name: "Electron", icon: <LogoElectron {...badgeProps} /> },
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
        title="The Dark Between"
        subTitle="Personal website for RPG Knowledge Base"
        githubLink="https://github.com/midnightprioriem/the-dark-between"
        siteLink="https://midnightprioriem.github.io/the-dark-between/"
        invert
        badges={[
          { name: "Typescript", icon: <Typescript {...badgeProps} /> },
          { name: "Gatsby", icon: <Gatsby {...badgeProps} /> },
          { name: "ReactJS", icon: <ReactLogo {...badgeProps} /> },
        ]}
        demo={<Image src={theDarkBetween} width="100%" />}
      >
        <Typography variant="span">
          The Dark Between is a personal website built with Gatsby and
          Typescript to act as a Knowledge Base for a Homebrew RPG that I run.
          Gatsby is set up to take Markdown files that I write and build a
          static site for my players to access.
        </Typography>
      </Project>
      <Project
        title="Hannum Ever After"
        subTitle="Personal website for Wedding, including RSVP"
        githubLink="https://github.com/midnightprioriem/hannum-ever-after"
        siteLink="https://midnightprioriem.github.io/hannum-ever-after/"
        badges={[
          { name: "Javascript", icon: <Javascript {...badgeProps} /> },
          { name: "ReactJS", icon: <ReactLogo {...badgeProps} /> },
        ]}
        demo={<Image src={hannumEverAfter} width="100%" />}
      >
        <Typography variant="span">
          Hannum Ever After is a personal wedding website I built for guests to
          find information about the wedding as well as digitally RSVP using{" "}
          <Link href="https://sheetdb.io">SheetDB</Link>, built with Javascript
          and ReactJS.
        </Typography>
      </Project>
      <Project
        title="Audibooks"
        subTitle="Android Application for listening to audiobooks"
        githubLink="https://github.com/midnightprioriem/audibooks"
        invert
        badges={[
          { name: "Android", icon: <Android {...badgeProps} /> },
          { name: "Java", icon: <Java {...badgeProps} /> },
          { name: "SQLite", icon: <Sqlite {...badgeProps} /> },
        ]}
        demo={
          <>
            <Video src={audibooks1} width="45%" />
            <Video src={audibooks2} width="45%" />
          </>
        }
      >
        <Typography variant="p">
          Audibooks was my first Android app, built in Android Studio using Java
          and a smidge of SQLite. Building the app gave me a good understanding
          of implementing media services, custom ArrayLists, SQLite Databases,
          user prefs, Material Design, JSON Queries, crash reporting and
          testing, and using GitHub.
        </Typography>
      </Project>
      <Project
        title="MkDocs Autolinks Plugin"
        subTitle="An MkDocs plugin that simplifies relative linking between documents."
        githubLink="https://github.com/midnightprioriem/mkdocs-autolinks-plugin"
        invert
        badges={[
          { name: "Python", icon: <Python {...badgeProps} /> },
          { name: "PyPi", icon: <Pypi {...badgeProps} /> },
          { name: "MkDocs" },
        ]}
      >
        <Typography variant="p">
          Autolinks is a Python plugin available on{" "}
          <Link href="https://pypi.org/project/mkdocs-autolinks-plugin/">
            PyPi
          </Link>{" "}
          build for MkDocs, a static documentation generator. It automagically
          calculates relative paths between files so that you don't have to.
          It's used by 150+ Github projects and is downloaded ~4500 times per
          month.
        </Typography>
      </Project>
    </Section>
  );
};

export default ProjectSection;
