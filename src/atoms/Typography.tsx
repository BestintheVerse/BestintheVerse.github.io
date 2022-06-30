import React from "react";
import styled from "styled-components";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

type TypographyProps = {
  variant: TypographyVariant;
} & React.ComponentPropsWithRef<"span">;

const StyledH1 = styled.span`
  font-size: 4em;
  text-align: center;
`;
const StyledH2 = styled.span`
  font-size: 2em;
`;
const StyledH3 = styled.span`
  font-size: 1.8em;
`;
const StyledH4 = styled.span`
  font-size: 1.5em;
`;
const StyledH5 = styled.span`
  font-size: 1.3em;
`;
const StyledH6 = styled.span`
  font-size: 1.2em;
`;
const StyledSpan = styled.span``;

const Typography = ({ variant, children }: TypographyProps) => {
  const renderElement = (
    variant: TypographyVariant,
    children: React.ReactNode
  ) => {
    switch (variant) {
      case "h1":
        return <StyledH1>{children}</StyledH1>;
      case "h2":
        return <StyledH2>{children}</StyledH2>;
      case "h3":
        return <StyledH3>{children}</StyledH3>;
      case "h4":
        return <StyledH4>{children}</StyledH4>;
      case "h5":
        return <StyledH5>{children}</StyledH5>;
      case "h6":
        return <StyledH6>{children}</StyledH6>;
      case "span":
        return <StyledSpan>{children}</StyledSpan>;
    }
  };

  return renderElement(variant, children);
};

export default Typography;
