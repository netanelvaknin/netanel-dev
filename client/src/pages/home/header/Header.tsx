import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header>
      <h1>פרונט אנד בגובה העיניים</h1>
      <h1>בלוג תכנות קליל</h1>
      <p>בלי מושגים מפוצצים והסברים מסובכים, כולה תכנות</p>
      <Button variant="contained" onClick={() => history.push("/blog")}>
        לבלוג
      </Button>
      <Button onClick={() => history.push("/about")}>קצת עליי</Button>
    </header>
  );
};

export default Header;
