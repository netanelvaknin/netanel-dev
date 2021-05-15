import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import { CookiesProvider } from "react-cookie";
import "moment/locale/he";
import ContextContainer from "./context/ContextContainer";

ReactDOM.render(
  <Suspense fallback={<>טעינה מתבצעת...</>}>
    <Router>
      <CookiesProvider>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <ContextContainer>
              <App />
            </ContextContainer>
          </ThemeProvider>
        </MuiThemeProvider>
      </CookiesProvider>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
