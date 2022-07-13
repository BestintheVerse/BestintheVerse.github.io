import { Job } from "../molecules";
import { Typography } from "../atoms";
import garmin from "../assets/garmin-logo.png";

const Garmin = () => {
  return (
    <Job
      icon={garmin}
      title="Software Engineer II"
      company="Garmin"
      dates="2021 - Present"
    >
      <Typography variant="p">
        Add Description Here.
      </Typography>
    </Job>
  );
};

export default Garmin;
