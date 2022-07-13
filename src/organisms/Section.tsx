import styled from "styled-components";
import { Typography } from "../atoms";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <StyledSection>
      <Typography variant="h1">{title}</Typography>
      {children}
    </StyledSection>
  );
};

export default Section;
