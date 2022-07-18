import styled, { css } from "styled-components";
import { Typography, Badge, ButtonLink } from "../atoms";
import { Github } from "@styled-icons/entypo-social/Github";
import { Link45deg } from "@styled-icons/bootstrap/Link45deg";
import { useMediaQuery } from "../hooks";

type StyledProjectProps = {
  invert: boolean;
};

const StyledProject = styled.div<StyledProjectProps>`
  padding: 25px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2%;

  ${(p) =>
    p.invert &&
    css`
      flex-direction: row-reverse;
    `}
`;

const GithubIcon = styled(Github)`
  color: ${(p) => p.theme.fg};
  height: 20px;
`;

const LinkIcon = styled(Link45deg)`
  color: ${(p) => p.theme.fg};
  height: 20px;
`;

type ContainerProps = {
  useFullsize: boolean;
};

const ContentContainer = styled.div<ContainerProps>`
  ${(p) =>
    p.useFullsize
      ? css`
          width: 100%;
        `
      : css`
          width: 38%;
        `}
`;

const DemoContainer = styled.div<ContainerProps>`
  ${(p) =>
    p.useFullsize
      ? css`
          width: 100%;
        `
      : css`
          width: 60%;
        `}
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
`;

type BadgeProps = {
  name: string;
  icon?: React.ReactElement;
};

type ProjectProps = {
  title: string;
  subTitle: string;
  invert?: boolean;
  badges?: BadgeProps[];
  githubLink?: string;
  siteLink?: string;
  demo?: React.ReactElement;
  children: React.ReactNode;
};

const Job = ({
  title,
  subTitle,
  invert = false,
  siteLink,
  githubLink,
  badges,
  demo,
  children,
}: ProjectProps) => {
  const useFullSizeDemo = useMediaQuery("(max-width: 1000px)");

  return (
    <StyledProject invert={invert}>
      {demo && (
        <DemoContainer useFullsize={useFullSizeDemo}>{demo}</DemoContainer>
      )}
      <ContentContainer useFullsize={useFullSizeDemo || !demo}>
        <Typography variant="h5">
          <em>{title}</em>
        </Typography>
        <Typography variant="p">{subTitle}</Typography>
        {children}
        <BadgeContainer>
          {badges?.map((badge: BadgeProps, index: number) => (
            <Badge key={index} name={badge.name} icon={badge.icon} />
          ))}
        </BadgeContainer>
        <BadgeContainer>
          {siteLink && (
            <ButtonLink name="Site" icon={<LinkIcon />} href={siteLink} />
          )}
          {githubLink && (
            <ButtonLink name="Github" icon={<GithubIcon />} href={githubLink} />
          )}
        </BadgeContainer>
      </ContentContainer>
    </StyledProject>
  );
};

export default Job;
