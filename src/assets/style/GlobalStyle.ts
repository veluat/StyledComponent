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

  @font-face {
    font-family: 'Canela Trial';
    src: url('./../../assets/fonts/Canela-Medium.eot?') format('eot');
    src: url('./../../assets/fonts/Canela-Medium.woff2?') format('woff2');
    src: url('./../../assets/fonts/Canela-Medium.ttf?') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.fontWhite};
    line-height: 1.6;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    background-image: url('${bg}');
    background-color: rgba(9, 15, 29, 0.99);
    background-blend-mode: color-burn;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.fontWhite};
  }

  span {
    color: ${theme.colors.primary};
  }

  ul {
    list-style: none;
  }

  li {
    ${font({
      weight: 400,
      lineHeight: 1.6,
      Fmax: 16,
      Fmin: 16,
    })}
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  h1 {
    ${font({
      family: "'Canela Trial', sans-serif",
      weight: 500,
      lineHeight: 1.2,
      Fmax: 64,
      Fmin: 39,
    })}
  }

  h2 {
    ${font({
      family: "'Canela Trial', sans-serif",
      weight: 500,
      lineHeight: 1.2,
      Fmax: 48,
      Fmin: 31,
    })}
  }

  h3 {
    ${font({
      color: `${theme.colors.pureWhite}`,
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