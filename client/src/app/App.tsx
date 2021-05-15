import { pageRoutes } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../ui";
import { Container } from "@material-ui/core";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Switch>
          {pageRoutes.map(({ path, exact, component }) => {
            return (
              <Route exact={exact} path={path} key={path}>
                {component}
              </Route>
            );
          })}
        </Switch>
      </Container>
    </>
  );
};

export default App;
