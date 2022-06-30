import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const StyledImage = styled.img`
  height: 80px;
  width: 80px;
`;

const Logo = (props: React.ComponentPropsWithRef<"img">) => {
  return <StyledImage {...props} src={logo} alt="logo" />;
};

export default Logo;
