import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 10px;
`;

type ImageProps = React.ComponentPropsWithRef<"img">;

const Image = (props: ImageProps) => {
  return <StyledImage {...props} />;
};

export default Image;
