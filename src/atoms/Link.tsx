import styled from "styled-components";

const StyledLink = styled.a`
  all: unset;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  color: ${(p) => p.theme.primary};
  display: inline-block;
  transition: color 100ms ease-in-out;
  margin: 0 1px;
  padding: 0 2px;
  &:before {
    position: absolute;
    border-bottom: 2px solid ${(p) => p.theme.primary};
    content: "";
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: width 100ms ease-in-out;
  }
  &:hover:before {
    width: 100%;
  }
  &:hover {
    color: ${(p) => p.theme.fg};
  }
`;

type LinkProps = React.ComponentPropsWithRef<"a">;

const Link = (props: LinkProps) => {
  return <StyledLink {...props} target="_blank" />;
};

export default Link;
