import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Canela;
    src: local('Canela');
    src: url("./../assets/fonts/CanelaText-Bold.eot?") format("embedded-opentype");
    src: url("./../assets/fonts/CanelaText-Bold.woff2") format("woff2");
    src: url("./../assets/fonts/CanelaText-Bold-Trial.otf") format("opentype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Canela;
    src: local('Canela');
    src: url("./../assets/fonts/CanelaText-Medium.eot?") format("embedded-opentype");
    src: url("./../assets/fonts/CanelaText-Medium.woff2") format("woff2");
    src: url("./../assets/fonts/CanelaText-Medium-Trial.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Canela;
    src: local('Canela');
    src: url("./../assets/fonts/CanelaText-Regular.eot?") format("embedded-opentype");
    src: url("./../assets/fonts/CanelaText-Regular.woff2") format("woff2");
    src: url("./../assets/fonts/CanelaText-Regular-Trial.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: 'Canela', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
  }


`