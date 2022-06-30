import styled from "styled-components";
import Color from "color";
import { StyledIconBase } from "@styled-icons/styled-icon";

const StyledMenuItemIcon = styled.a`
  all: unset;
  ${StyledIconBase} {
    cursor: pointer;
    height: 25px;
    width: 25px;
    color: ${(p) => p.theme.fg};
    &:hover {
      color: ${(p) => Color(p.theme.fg).darken(0.2).hsl().toString()};
    }
  }
`;

const MenuItemIcon = ({
  children,
  ...props
}: React.ComponentPropsWithRef<"a">) => {
  return <StyledMenuItemIcon {...props}>{children}</StyledMenuItemIcon>;
};

export default MenuItemIcon;
