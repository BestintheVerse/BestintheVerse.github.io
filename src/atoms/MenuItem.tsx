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

type MenuItemProps = {
  navRef: React.RefObject<HTMLDivElement>;
} & React.ComponentPropsWithRef<"button">;

const MenuItem = ({ navRef, children, ...props }: MenuItemProps) => {
  const handleClick = () => {
    const nav = navRef.current;
    if (nav) {
      console.log(`${nav.getBoundingClientRect().y - 150}`);
      window.scrollTo({
        behavior: "smooth",
        top: nav.getBoundingClientRect().y + window.pageYOffset - 150,
      });
    }
  };

  return (
    <StyledMenuItem {...props} onClick={handleClick}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;
