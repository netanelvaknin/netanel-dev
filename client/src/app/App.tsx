import { pageRoutes } from "./routes";
import { Route, Switch } from "react-router-dom";
import { Navbar, Footer } from "../ui";
import { Container } from "@material-ui/core";
import {useScroll} from '../hooks';
import "./app.css";
import styled from 'styled-components/macro';
import {mobile} from '../utils/screen-sizes';

const App = () => {
  const scrollToTop = useScroll();
  return (
    <AppContainer>
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
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding-bottom: 6rem;

  @media ${mobile} {
    padding: 2rem 2rem 3rem;
  }
`;

export default App;
