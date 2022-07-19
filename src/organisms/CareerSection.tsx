import styled from "styled-components";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";
import { Section } from "../organisms";
import { Job } from "../molecules";
import { Typography, ButtonLink } from "../atoms";
import garmin from "../assets/garmin-logo.png";
import plexus from "../assets/plexus-logo.png";
import kast from "../assets/kast-logo.png";
import bitv from "../assets/bitv-logo.png";
import type { PublicSectionProps } from "./Section";

const ButtonsList = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const LinkIcon = styled(ExternalLinkOutline)`
  height: 20px;
  color: ${(p) => p.theme.fg};
`;

const CareerSection = (props: PublicSectionProps) => {
  return (
    <Section title="Career" {...props}>
      <Job
        icon={garmin}
        title="Software Engineer II"
        company="Garmin"
        dates="2021 - Present"
      >
        <Typography variant="p">
          At Garmin, I work as a high-level software engineer developing the
          latest and greatest fitness products for tens of thousands of global
          consumers. My work is primarily on mid-level and frontend
          functionality written in C and C++—LTE subscription management,
          location and activity tracking, and graph visualizations. I
          collaborate closely with developers, UI/UX designers, internal and
          external testers, and project managers to create production-ready code
          that runs on thousands of devices.
        </Typography>
      </Job>
      <Job
        icon={plexus}
        title="Software Engineer I & II"
        company="Plexus"
        dates="2018 - 2021"
      >
        <Typography variant="p">
          At Plexus, I worked on a wide variety engineering projects in the
          embedded space and developed everything from highly-efficient
          bare-metal code to fully-fledged frontend applications on QNX using
          the Qt/QML framework, integrated with a DDS backend. My experience ran
          the full spectrum of the software development lifecycle. I worked on
          projects in the early stages, brought up development kits, prototyped
          features and software.
        </Typography>
        <Typography variant="p">
          I collaborated with large, multi-disciplinary teams to create
          high-quality, tested, production code for complex data-distributed
          systems of embedded devices. And I crafted verification tests to meet
          IEC medical device software standards for readying products for
          mainline production.
        </Typography>
      </Job>
      <Job
        icon={kast}
        title="Co-Founder"
        company="Kast Clothing"
        dates="2016 - 2017"
      >
        <Typography variant="p">
          Kast Clothing used technology and innovations such as 3D body
          scanning, garment simulation, and pattern generation to provide better
          fitting clothes and allow users to shop more confidently online. The
          company began through North Carolina State University's Engineering
          Entrepreneurship program. Kast's co-founders were accepted as NC State
          EI Fellows and received funding. Kast participated in the 2017 Lulu
          eGames and received an award and funding for winning a fan favorite
          video contest. During the summer of 2017, Kast Clothing also
          participated in the Andrew's Launch Accelerator program.
        </Typography>
        <Typography variant="p">
          At Kast, I filled a couple of different roles including pattern
          development, 3D garment fit simulation, graphic design, customer
          discovery, and video production. Initially, I worked on developing
          patterns for custom jeans, including understanding the patterning
          process and modifying them. To test for fit, I worked 3D garment
          software to simulate patterns on 3D scanned avatars. I was also the
          lead for video production, creating our eGames video pitch and other
          pieces of media for Kast.
        </Typography>
        <ButtonsList>
          <ButtonLink
            name="NC Technician Article"
            icon={<LinkIcon />}
            href="http://www.technicianonline.com/arts_entertainment/article_afa41236-2578-11e7-b9eb-ef95e2f5fcde.html"
          ></ButtonLink>
          <ButtonLink
            name="Poole College Article"
            icon={<LinkIcon />}
            href="https://poole.ncsu.edu/news/2017/09/06/nc-state-student-entrepreneurs-gain-a-lot-from-andrews-launch-accelerator-experience/"
          ></ButtonLink>
          <ButtonLink
            name="eGames Winning Video"
            icon={<LinkIcon />}
            href="https://vimeo.com/210322534"
          >
            <LinkIcon />
          </ButtonLink>
        </ButtonsList>
      </Job>
      <Job
        icon={bitv}
        title="Founder"
        company="Best in the Verse Audio"
        dates="2014 - 2017"
      >
        <Typography variant="p">
          In the Summer after my Freshman year, I created Best in the Verse
          Audio, a company providing hand-crafted cables for high-end
          headphones. Since its inception, I have sold hundreds of hand-crafted
          cables to customers all over the world. In 2017, the company has had a
          62% increase in revenue compared to 2016 with $0 attributed to
          marketing. Best in the Verse averages 2,500 visitors per month.
        </Typography>
        <Typography variant="p">
          My experience running Best in the Verse Audio has given me skills in
          product development, customer service, and web dev. Taking customer
          feedback, I was able to iteratively improve my products to offer the
          highest quality possible. The nature of custom products neccesitates
          having effective and responsive customer service. Finally, I have over
          two years of experience running my website through Shopify, editing
          the html, css, and liquid of the site.
        </Typography>
      </Job>
    </Section>
  );
};

export default CareerSection;
