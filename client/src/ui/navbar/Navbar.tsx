import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const Navbar = () => {
  const navLinks = [
    { to: "/", text: "דף הבית", exact: true },
    { to: "/blog", text: "בלוג", exact: false },
    { to: "/about", text: "קצת עליי", exact: true },
  ];

  return (
    <NavbarContainer>
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
    border-bottom: 2px solid blue;
  }

  & > * {
    margin-left: 2rem;
    text-decoration: none;
    color: inherit;
    padding-bottom: 1rem;
  }
`;

export default Navbar;
