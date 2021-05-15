import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Navbar = () => {
  const navLinks = [
    { to: "/", text: "דף הבית", exact: true },
    { to: "/blog", text: "בלוג", exact: false },
    { to: "/about", text: "קצת עליי", exact: true },
  ];

  return (
    <NavbarContainer style={{padding: 0}}>
      {navLinks.map((link) => {
        return (
          <NavLink key={link.text} exact={link.exact} activeClassName="selected" to={link.to}>
            {link.text}
          </NavLink>
        );
      })}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.theme.fonts.bold};
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 2.4rem;
  box-sizing: border-box;
  transition: all 3s;

  & > .selected {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4rem;
      border-bottom: 3px solid ${props => props.theme.palette.secondary.main};
    }
  }

  & > * {
    margin-left: 2rem;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0rem;
    text-align: center;
  }
`;

export default Navbar;
