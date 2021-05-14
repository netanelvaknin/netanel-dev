import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "./global-styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import { CookiesProvider } from "react-cookie";
import "moment/locale/he";

ReactDOM.render(
  <Suspense fallback={<>Loading...</>}>
    <Router>
      <CookiesProvider>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </CookiesProvider>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
