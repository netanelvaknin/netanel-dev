import { pageRoutes } from "./routes";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        {pageRoutes.map(({ path, exact, component }) => {
          return (
            <Route exact={exact} path={path} key={path}>
              {component}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

export default App;
