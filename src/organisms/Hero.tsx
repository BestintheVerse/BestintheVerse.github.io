import styled from "styled-components";
import { Portrait, Typography, Button } from "../atoms";

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
`;

const StyledHeroContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroContainer>
          <Typography variant="h1" align="center">
            Hi, I'm <strong>Zach</strong>
          </Typography>
        </StyledHeroContainer>
        <StyledHeroContainer>
          <Portrait />
        </StyledHeroContainer>
        <StyledHeroContainer>
          <Typography variant="h2">
            <strong>
              Passionate about full-stack software development, embedded
              systems, and design.
            </strong>
          </Typography>
        </StyledHeroContainer>
      </StyledHero>
      <StyledHeroContainer>
        <Typography variant="h4" color="fgSecondary" align="center">
          Software&nbsp;Engineer&nbsp;at&nbsp;
        </Typography>
        <Typography variant="h4" color="primary">
          <strong>Garmin</strong>
        </Typography>
      </StyledHeroContainer>
      <StyledHeroContainer>
        <Button>Resume</Button>
      </StyledHeroContainer>
    </>
  );
};

export default Hero;
