import styled from "styled-components";
import { MenuItem, MenuItemIcon, Logo } from "../atoms";
import { MenuItemList } from "../molecules";
import { Github } from "@styled-icons/entypo-social/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20vh;
  padding: 0px 5vw;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <MenuItemList gap={10}>
        <MenuItem>About</MenuItem>
        <MenuItem>Career</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItemList>
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
    </StyledHeader>
  );
};

export default Header;
