import { pageRoutes } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Navbar, Footer } from "../ui";
import { Container } from "@material-ui/core";
import {useScroll} from '../hooks';
import "./app.css";

const App = () => {
  const scrollToTop = useScroll();
  return (
    <div style={{paddingBottom: '6rem'}}>
      <Navbar />
      <Container maxWidth="md" style={{padding: '0 0 15rem 0'}}>
        <Switch>
          {pageRoutes.map(({ path, exact, component }) => {
            return (
              <Route exact={exact} path={path} key={path}>
                {component}
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
