import { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider as MuiThemeProvider,
  jssPreset,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import { CookiesProvider } from "react-cookie";
import "moment/locale/he";
import ContextContainer from "./context/ContextContainer";
import { create } from "jss";
import rtl from "jss-rtl";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props: any) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

ReactDOM.render(
  <Suspense fallback={<></>}>
    <Router basename="/">
      <CookiesProvider>
        <ContextContainer>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <RTL>
                <App />
              </RTL>
            </ThemeProvider>
          </MuiThemeProvider>
        </ContextContainer>
      </CookiesProvider>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
