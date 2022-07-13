import React from "react";
import styled, { css } from "styled-components";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
type Color = "fg" | "fgSecondary" | "primary";
type Align = "center" | "left" | "right" | "justify";

type StyledTypographyProps = {
  variant: TypographyVariant;
  color?: Color;
  align?: Align;
};

type TypographyProps = StyledTypographyProps &
  React.ComponentPropsWithRef<"span">;

const StyledTopography = styled.span<StyledTypographyProps>`
  ${(p) =>
    p.color &&
    css`
      color: ${p.theme[`${p.color}`]};
    `}
  ${(p) =>
    p.align &&
    css`
      text-align: ${p.align};
    `}
`;

const StyledH1 = styled(StyledTopography)`
  font-size: 4em;
  padding: 20px;
`;
const StyledH2 = styled(StyledTopography)`
  font-size: 3em;
`;
const StyledH3 = styled(StyledTopography)`
  font-size: 1.8em;
`;
const StyledH4 = styled(StyledTopography)`
  font-size: 1.5em;
`;
const StyledH5 = styled(StyledTopography)`
  font-size: 1.3em;
`;
const StyledH6 = styled(StyledTopography)`
  font-size: 1.2em;
`;
const StyledSpan = styled(StyledTopography)``;
const StyledP = styled(StyledTopography)`
  display: block;
  padding: 10px 0px;
`;

const Typography = ({
  variant,
  children,
  color = "fg",
  align = "left",
  ...props
}: TypographyProps) => {
  const renderElement = (
    variant: TypographyVariant,
    children: React.ReactNode
  ) => {
    switch (variant) {
      case "h1":
        return (
          <StyledH1 variant={variant} color={color} align={align}>
            {children}
          </StyledH1>
        );
      case "h2":
        return (
          <StyledH2 variant={variant} color={color} align={align}>
            {children}
          </StyledH2>
        );
      case "h3":
        return (
          <StyledH3 variant={variant} color={color} align={align}>
            {children}
          </StyledH3>
        );
      case "h4":
        return (
          <StyledH4 variant={variant} color={color} align={align}>
            {children}
          </StyledH4>
        );
      case "h5":
        return (
          <StyledH5 variant={variant} color={color} align={align}>
            {children}
          </StyledH5>
        );
      case "h6":
        return (
          <StyledH6 variant={variant} color={color}>
            {children}
          </StyledH6>
        );
      case "span":
        return (
          <StyledSpan variant={variant} color={color}>
            {children}
          </StyledSpan>
        );
      case "p":
        return (
          <StyledP variant={variant} color={color}>
            {children}
          </StyledP>
        );
    }
  };

  return renderElement(variant, children);
};

export default Typography;
