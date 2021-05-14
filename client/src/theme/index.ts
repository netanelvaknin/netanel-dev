import { createMuiTheme, ThemeOptions } from "@material-ui/core";

// type FontType = 'OpenSansHebrew' | 'OpenSansHebrewBold' | 'OpenSansHebrewItalic' | 'OpenSansHebrewLight';
interface IThemeOptions extends ThemeOptions {
  fonts: {}
}

export default createMuiTheme({
  direction: "rtl",
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'OpenSansHebrew',
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
  },
  fonts: {
    regular: 'OpenSansHebrew',
    bold: 'OpenSansHebrewBold',
    italic: 'OpenSansHebrewItalic',
    light: 'OpenSansHebrewLight'
  }
} as IThemeOptions);