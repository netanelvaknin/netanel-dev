import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  direction: "rtl",
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Arimo',
      'sans-serif'
    ].join(','),
  },
  palette: {
    // primary: {
      
    // },
    // secondary: {
      
    // },
    // error: {
      
    // }
  },
  overrides: {
    MuiTextField: {
      root: {
        width: '100%'
      }
    }
  }
});