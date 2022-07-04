import React from "react";
import styled, { css } from "styled-components";

const ButtonStyles = css`
  all: unset;
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
