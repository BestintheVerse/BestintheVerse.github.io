import styled from "styled-components";
import portrait from "../assets/portrait.jpeg";

const StyledPortraitContainer = styled.div`
  height: 400px;
  width: 400px;
  max-width: 70vw;
  max-height: 70vw;
  border-radius: 50%;
  border: 2px solid ${(p) => p.theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPortrait = styled.img`
  max-width: 95%;
  max-height: 95%;
  margin: 10px;
  border: 2px solid ${(p) => p.theme.border};
  border-radius: 50%;
`;

const Portrait = () => {
  return (
    <StyledPortraitContainer>
      <StyledPortrait src={portrait} alt="portrait" />
    </StyledPortraitContainer>
  );
};

export default Portrait;
