import styled, { css } from "styled-components/macro";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";
import { Divider, Container } from "@material-ui/core";

export const Footer = () => {
  return (
      <FooterStyle maxWidth="md" style={{padding: 0}}>
        <Divider />
        <Content>
          <p style={{ marginBottom: "1rem" }}>מוזמנים להתחבר</p>
          <IconsContainer>
            <FacebookIcon />
            <GithubIcon />
            <LinkedinIcon />
          </IconsContainer>
        </Content>
      </FooterStyle>
  );
};

const FooterStyle = styled(Container)`
  position: absolute;
  bottom: 0;
  padding: 0;
  height: 15rem;
  width: 100%;
`;

const Content = styled.div`
  left: 0;
  position: absolute;
  margin-top: 2rem;
`;

export const IconsContainer = styled.div`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0.5rem;
`;

const commonStyles = css`
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.palette.secondary.main};
  }
`;

const FacebookIcon = styled(Facebook)`
  ${commonStyles};
`;

const GithubIcon = styled(Github)`
  ${commonStyles};
`;

const LinkedinIcon = styled(Linkedin)`
  ${commonStyles};
`;

export default Footer;
