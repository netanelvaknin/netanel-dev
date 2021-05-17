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
    primary: {
      main: '#000',
      light: 'rgba(0, 0, 0, 0.8)'
    },
    secondary: {
      main: '#f5b149'
    },
    // error: {
      
    // }
  },
  overrides: {
    MuiTextField: {
      root: {
        width: '100%'
      }
    },
    MuiButton: {
      contained: {
        '&, &:hover': {
          width: '18rem',
          height: '5rem',
          fontSize: '2rem',
        }
      },
      containedSecondary: {
        color: '#fff',
        fontFamily: 'OpenSansHebrewBold'
      },
      outlined: {
        fontSize: '2rem',
        fontFamily: 'OpenSansHebrewBold',
        color: 'rgba(0, 0, 0, .8)',
        height: '5rem',
        width: '18rem',
      },
      text: {
        '&, &:hover': {
          textDecoration: 'underline',
        },
        fontSize: '2rem'
      }
    },
    MuiSkeleton: {
      text: {
        transform: 'unset'
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