import styled, { css } from "styled-components";
import Color from "color";
import { MenuItem, MenuItemIcon, Logo } from "../atoms";
import { MenuItemList } from "../molecules";
import { Github } from "@styled-icons/entypo-social/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { useMediaQuery, useScrollAt } from "../hooks";

const StyledHeader = styled.div`
  height: 150px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  @media screen and (max-width: 700px) {
    align-items: flex-start;
  }
`;

type StyledHeaderBackgroundProps = {
  showBackground: boolean;
};

const StyledHeaderBackground = styled.div<StyledHeaderBackgroundProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50%;
  padding: 20px 50px;

  border-radius: 20px;
  ${(p) =>
    p.showBackground &&
    css`
      background-color: ${(p) =>
        Color(p.theme.bg).lighten(0.5).alpha(0.8).hsl().toString()};
      backdrop-filter: blur(40px);
      box-shadow: 0px 10px 10px
        ${(p) => Color(p.theme.bg).lighten(0.3).alpha(0.7).hsl().toString()};
    `}
  transition: background-color 500ms ease-out, box-shadow 500ms ease-out;

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0px;
  }
`;

const Header = () => {
  const useHasSCrolled = useScrollAt(0);
  const hideMenuList = useMediaQuery("(max-width: 800px)");

  return (
    <StyledHeader>
      <StyledHeaderBackground showBackground={useHasSCrolled}>
        <Logo />
        {!hideMenuList && (
          <MenuItemList gap={10}>
            <MenuItem>About</MenuItem>
            <MenuItem>Career</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuItemList>
        )}
        <MenuItemList gap={25}>
          <MenuItemIcon
            href="https://github.com/midnightprioriem"
            target="_blank"
          >
            <Github />
          </MenuItemIcon>
          <MenuItemIcon
            href="https://www.linkedin.com/in/zhannum/"
            target="_blank"
          >
            <Linkedin />
          </MenuItemIcon>
        </MenuItemList>
      </StyledHeaderBackground>
    </StyledHeader>
  );
};

export default Header;
