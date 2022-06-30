import styled from "styled-components";
import { Portrait, Typography } from "../atoms";

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
    <StyledHero>
      <StyledHeroContainer>
        <Typography variant="h1">
          Hi, I'm <strong>Zach</strong>
        </Typography>
      </StyledHeroContainer>
      <StyledHeroContainer>
        <Portrait />
      </StyledHeroContainer>
      <StyledHeroContainer>
        <Typography variant="h2">
          <strong>
            Passionate about full-stack software development, embedded systems,
            and design.
          </strong>
        </Typography>
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
