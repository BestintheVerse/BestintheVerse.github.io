import React from "react";
import styled, { css } from "styled-components";

const ButtonStyles = css`
  all: unset;
  cursor: pointer;
  background-color: ${(p) => p.theme.primary};
  background-size: 200% 300%;
  background-image: ${(p) =>
    `radial-gradient(circle, ${p.theme.primaryBlend}, ${p.theme.primary})`};
  height: 30px;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 10px;
  box-shadow: 0px 2px 10px ${(p => p.theme.primaryShadow)};
  &:hover {
    opacity: 0.8;
  }
  transition: opacity 150ms ease-out;
`;

const StyledButtonLink = styled.a`
  ${ButtonStyles}
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const ButtonLink = ({
  children,
  ...props
}: React.ComponentPropsWithRef<"a">) => {
  return <StyledButtonLink {...props}>{children}</StyledButtonLink>;
};

const Button = ({
  children,
  ...props
}: React.ComponentPropsWithRef<"button">) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { ButtonLink, Button };
