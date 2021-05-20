import styled, { css } from "styled-components/macro";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";
import { Divider, Container } from "@material-ui/core";
import { mobile } from "../../utils/screen-sizes";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  return (
    <FooterStyle maxWidth="md" style={{ padding: 0 }}>
      {!location.pathname.includes("/404") && (
        <>
          <Divider />
          <Content>
            <p style={{ marginBottom: "1rem" }}>מוזמנים להתחבר</p>
            <IconsContainer>
              <a href="https://www.facebook.com/vakninetanel" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://github.com/netanelvaknin" target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/netanel-vaknin" target="_blank" rel="noreferrer">
                <LinkedinIcon />
              </a>
            </IconsContainer>
          </Content>
        </>
      )}
    </FooterStyle>
  );
};

const FooterStyle = styled(Container)`
  position: absolute;
  bottom: 0;
  padding: 0;
  height: 15rem;
  width: 100%;

  @media ${mobile} {
    right: 0;

    hr {
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

const Content = styled.div`
  left: 0;
  position: absolute;
  margin-top: 2rem;

  @media ${mobile} {
    left: 2rem;
  }
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
