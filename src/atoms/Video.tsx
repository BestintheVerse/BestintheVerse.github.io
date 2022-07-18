import styled from "styled-components";

const StyledVideo = styled.video`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px black;
  margin: 5px;
`;

type VideoProps = React.ComponentPropsWithRef<"video">;

const Video = (props: VideoProps) => {
  return <StyledVideo {...props} loop autoPlay muted />;
};

export default Video;
