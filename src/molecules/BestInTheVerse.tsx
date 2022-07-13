import { Job } from ".";
import { Typography } from "../atoms";
import logo from "../assets/bitv-logo.png";

const BestInTheVerse = () => {
  return (
    <Job
      icon={logo}
      title="Founder"
      company="Best in the Verse Audio"
      dates="2014 - 2017"
    >
      <Typography variant="p">
        In the Summer after my Freshman year, I created Best in the Verse Audio,
        a company providing hand-crafted cables for high-end headphones. Since
        its inception, I have sold hundreds of hand-crafted cables to customers
        all over the world. In 2017, the company has had a 62% increase in
        revenue compared to 2016 with $0 attributed to marketing. Best in the
        Verse averages 2,500 visitors per month.
      </Typography>
      <Typography variant="p">
        My experience running Best in the Verse Audio has given me skills in
        product development, customer service, and web dev. Taking customer
        feedback, I was able to iteratively improve my products to offer the
        highest quality possible. The nature of custom products neccesitates
        having effective and responsive customer service. Finally, I have over
        two years of experience running my website through Shopify, editing the
        html, css, and liquid of the site.
      </Typography>
    </Job>
  );
};

export default BestInTheVerse;
