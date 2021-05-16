import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <PrimaryHeading>פרונט-אנד בגובה העיניים - </PrimaryHeading>
      <PrimaryHeading>בלוג תכנות קליל</PrimaryHeading>
      <SecondaryHeading>
        בלי מושגים מפוצצים והסברים מסובכים, שחררו!
      </SecondaryHeading>
      <div>
        <BlogButton
          color="secondary"
          variant="contained"
          onClick={() => history.push("/blog")}
        >
          מעבר לבלוג
        </BlogButton>
        <Button variant="outlined" onClick={() => history.push("/about")}>
          קצת עליי
        </Button>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  min-height: 29rem;
`;

export const PrimaryHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
`;

const SecondaryHeading = styled.h2`
  font-family: ${(props) => props.theme.fonts.light};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const BlogButton = styled(Button)`
  &,
  &.MuiButtonBase-root {
    margin-left: 1.5rem;
  }
`;

export default Header;
