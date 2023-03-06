import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-family: 'Space Grotesk', sans-serif;
  }

`;

export default GlobalStyles;
