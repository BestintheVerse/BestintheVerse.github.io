import styled from "styled-components";
import { Typography } from "../atoms";

const StyledJob = styled.div`
  padding: 25px 0px;
`;

const StyledJobIcon = styled.img`
  width: 60px;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 15px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledChildrenContainer = styled.div`
  padding-left: 80px;
  @media screen and (max-width: 700px) {
    padding-left: 0px;
  }
`;

type JobProps = {
  icon: string | React.ReactElement;
  title: string;
  company: string;
  dates: string;
  children: React.ReactNode;
};

const Job = ({ icon, title, company, dates, children }: JobProps) => {
  return (
    <StyledJob>
      <StyledHeaderContainer>
        {typeof icon === "string" ? <StyledJobIcon src={icon} /> : icon}
        <StyledTitleContainer>
          <Typography variant="h4">
            <em>{title}</em>
          </Typography>
          <Typography variant="h5">{company}</Typography>
          <Typography variant="span">
            <em>{dates}</em>
          </Typography>
        </StyledTitleContainer>
      </StyledHeaderContainer>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledJob>
  );
};

export default Job;
