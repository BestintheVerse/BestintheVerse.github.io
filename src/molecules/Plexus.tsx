import { Job } from "../molecules";
import { Typography } from "../atoms";
import plexus from "../assets/plexus-logo.png";

const Plexus = () => {
  return (
    <Job
      icon={plexus}
      title="Software Engineer I & II"
      company="Plexus"
      dates="2018 - 2021"
    >
      <Typography variant="p">
        At Plexus, I worked on a wide variety engineering projects in the
        embedded space and developed everything from highly-efficient bare-metal
        code to fully-fledged frontend applications on QNX using the Qt/QML
        framework, integrated with a DDS backend. My experience ran the full
        spectrum of the software development lifecycle. I worked on projects in
        the early stages, brought up development kits, prototyped features and
        software.
      </Typography>
      <Typography variant="p">
        I collaborated with large, multi-disciplinary teams to create
        high-quality, tested, production code for complex data-distributed
        systems of embedded devices. And I crafted verification tests to meet
        IEC medical device software standards for readying products for mainline
        production.
      </Typography>
    </Job>
  );
};

export default Plexus;
