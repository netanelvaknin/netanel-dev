import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import {mobile} from '../../../utils/screen-sizes';

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <PrimaryHeading>פרונט-אנד בגובה העיניים</PrimaryHeading>
      <SecondaryHeading>
        חדשים בעולם ה- Web ? מחפשים תוכן בעברית ? הגעתם למקום הנכון. תוכלו למצוא כאן מאמרים קלילים בעברית ובלי מושגים מפוצצים.
      </SecondaryHeading>
      <ButtonsContainer>
        <BlogButton
          color="secondary"
          variant="contained"
          onClick={() => history.push("/blog")}
        >
          למאמרים
        </BlogButton>
        <Button variant="outlined" onClick={() => history.push("/about")}>
          איך זה עובד
        </Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  min-height: 29rem;
  max-width: 58rem;

  @media ${mobile} {
    margin-bottom: 6rem;
    padding-top: 3rem;
  }
`;

export const PrimaryHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
`;

const SecondaryHeading = styled.h2`
  font-family: ${(props) => props.theme.fonts.light};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;

  @media ${mobile} {
    margin-bottom: 3rem;
  }
`;

const BlogButton = styled(Button)`
  &,
  &.MuiButtonBase-root {
    margin-left: 1.5rem;
  }
`;

export default Header;
