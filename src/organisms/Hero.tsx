import styled from "styled-components";
import { Portrait, Typography, ButtonLink } from "../atoms";
// @ts-ignore
import resume from "../assets/zach_hannum_resume.pdf";
import { useMediaQuery } from "../hooks";
import { Download } from "@styled-icons/bootstrap/Download";

const PageContainer = styled.div`
  min-height: 80vh;
  margin-top: 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  padding: 20px 0px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const DownloadIcon = styled(Download)`
  height: 20px;
  color: ${(p) => p.theme.fg};
`;

const StyledHeroPortrait = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  width: 95vw;
`;

const StyledHeroContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const HeroLabels = ({ show }: { show: Boolean }) => {
  if (show) {
    return (
      <Typography variant="h2">
        <strong>
          Engineer
          <br />
          Designer
          <br />
          Creator
        </strong>
      </Typography>
    );
  } else {
    return <></>;
  }
};

const Hero = () => {
  const useSmallLayout = useMediaQuery("(max-width: 950px)");
  const hideLabels = useMediaQuery(
    "(max-width: 700px) and (max-height: 960px)"
  );

  return (
    <PageContainer>
      <StyledHero>
        <StyledHeroContainer>
          <Typography variant="h1" align="center">
            Hi, I'm <strong>Zach</strong>
          </Typography>
        </StyledHeroContainer>
        {useSmallLayout ? (
          <StyledHeroPortrait>
            <Portrait />
            <HeroLabels show={!hideLabels} />
          </StyledHeroPortrait>
        ) : (
          <>
            <StyledHeroContainer>
              <Portrait />
            </StyledHeroContainer>
            <StyledHeroContainer>
              <HeroLabels show={!hideLabels} />
            </StyledHeroContainer>
          </>
        )}
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
        <ButtonLink name="Resume" icon={<DownloadIcon />} href={resume} />
      </StyledHeroContainer>
    </PageContainer>
  );
};

export default Hero;
