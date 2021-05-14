import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Arimo', sans-serif;
  }
  html {
    direction: rtl;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.8rem;
  }
`

export default GlobalStyle;