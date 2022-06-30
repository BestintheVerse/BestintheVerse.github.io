import Color from "color";
import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background-color: ${(p) => Color(p.theme.fg).alpha(0.1).hsl().toString()};
  }
  transition: background-color 100ms ease-in-out;
  font-size: 1.2em;
  font-weight: 700;
`;

const MenuItem = ({
  children,
  ...props
}: React.ComponentPropsWithRef<"button">) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
};

export default MenuItem;
