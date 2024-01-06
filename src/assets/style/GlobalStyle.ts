import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {font} from "./Common";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 360px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.fontWhite};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
  }

`