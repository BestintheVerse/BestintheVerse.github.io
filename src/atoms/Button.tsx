import React from "react";
import styled, { css } from "styled-components";
import { Typography } from ".";

const ButtonStyles = css`
  all: unset;
  position: relative;
  min-width: 40px;
  font-size: 0.8em;
  cursor: pointer;
  background-color: ${(p) => p.theme.primary};
  background-size: 200% 200%;
  background-image: ${(p) =>
    `radial-gradient(circle, ${p.theme.primaryBlend}, ${p.theme.primary})`};
  height: 30px;
  padding: 3px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  white-space: nowrap;
  gap: 10px;
  box-shadow: 0px 2px 10px ${(p) => p.theme.primaryShadow};
  &:hover {
    background-size: 300% 300%;
    box-shadow: 0px 2px 15px ${(p) => p.theme.primaryShadow};
  }
  transition: background 150ms ease-out, box-shadow 150ms ease-out;
`;

const StyledButtonLink = styled.a`
  ${ButtonStyles}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

type ButtonProps = {
  name: string;
  icon?: React.ReactElement;
};

type ButtonLinkProps = ButtonProps & React.ComponentPropsWithRef<"a">;
const ButtonLink = ({ name, icon, ...props }: ButtonLinkProps) => {
  return (
    <StyledButtonLink target="_blank" {...props}>
      {icon && icon}
      <Typography variant="span">{name}</Typography>
    </StyledButtonLink>
  );
};

type ButtonButtonProps = ButtonProps & React.ComponentPropsWithRef<"button">;

const Button = ({ name, icon, ...props }: ButtonButtonProps) => {
  return (
    <StyledButton {...props}>
      {icon && icon}
      <Typography variant="span">{name}</Typography>
    </StyledButton>
  );
};

export { ButtonLink, Button };
