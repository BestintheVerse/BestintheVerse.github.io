import { StyledIcon } from "@styled-icons/styled-icon";
import styled from "styled-components";

type BadgeProps = {
  name: string;
  icon?: React.ReactElement;
};

const StyledBadge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.fg};
  height: 30px;
  padding: 10px 10px;
  border-radius: 8px;
  background-size: 200% 300%;
  border: 2px solid ${(p) => p.theme.primary};
  gap: 5px;
  box-shadow: 0px 2px 6px ${(p) => p.theme.primaryShadow};
  align-self: start;
`;

const BadgeText = styled.span`
  font-size: 0.7em;
`;

const Badge = ({ name, icon }: BadgeProps) => {
  return (
    <StyledBadge>
      <>
        {icon && icon}
        <BadgeText>{name}</BadgeText>
      </>
    </StyledBadge>
  );
};

export default Badge;
