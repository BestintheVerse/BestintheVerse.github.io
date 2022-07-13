import { Job } from "../molecules";
import { Typography } from "../atoms";
import kast from "../assets/kast-logo.png";

const Kast = () => {
  return (
    <Job
      icon={kast}
      title="Co-Founder"
      company="Kast Clothing"
      dates="2016 - 2017"
    >
      <Typography variant="p">
        Kast Clothing used technology and innovations such as 3D body scanning,
        garment simulation, and pattern generation to provide better fitting
        clothes and allow users to shop more confidently online. The company
        began through North Carolina State University's Engineering
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
        software to simulate patterns on 3D scanned avatars. I was also the lead
        for video production, creating our eGames video pitch and other pieces
        of media for Kast.
      </Typography>
    </Job>
  );
};

export default Kast;
