import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400');
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    color: #333333;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
