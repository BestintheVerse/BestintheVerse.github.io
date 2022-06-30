import React from "react";
import styled from "styled-components";

type MenuItemListProps = {
  gap: number;
} & React.ComponentPropsWithRef<"div">;

const StyledMenuItemList = styled.div<MenuItemListProps>`
  display: flex;
  gap: ${(p) => `${p.gap}px`};
`;

const MenuItemList = ({ children, ...props }: MenuItemListProps) => {
  return <StyledMenuItemList {...props}>{children}</StyledMenuItemList>;
};

export default MenuItemList;
