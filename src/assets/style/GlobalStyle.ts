import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import bg from "@assets/images/bg-image/BgImage.webp"
import {font} from "@assets/style/Common.ts";

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

    overflow-x: hidden;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(${theme.colors.primaryBg} 0%,${
            theme.colors.primaryBg
    } 100%), url("${bg}");
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
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
  
  h1 {
    ${font({
    family: 'Canela',
    weight: 500,
    lineHeight: 1.2,
    Fmax: 64,
    Fmin: 39,
})}
  }

  h2 {
    ${font({
    family: 'Canela',
    weight: 500,
    lineHeight: 1.2,
    Fmax: 48,
    Fmin: 31,
})}
  }

  h3 {
    ${font({
    weight: 700,
    lineHeight: 1.2,
    Fmax: 20,
    Fmin: 20,
})}
  }

  h4 {
    ${font({
    weight: 700,
    lineHeight: 1.2,
    Fmax: 24,
    Fmin: 20,
})}
  }

  h5 {
    ${font({
    weight: 700,
    lineHeight: 1.2,
    Fmax: 16,
    Fmin: 16,
})}
  }
  
`