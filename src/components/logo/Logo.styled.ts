import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const LogoWrapper = styled.div`
  position: relative;

  h3 {
    transform: translateY(10px);
    font-family: 'Canela Text Trial', sans-serif;
    font-size: 32px;
    line-height: 1.2;
    color: ${theme.colors.fontWhite};
    font-weight: 500;

    @media ${theme.media.tablet} {
      transform: translateY(-10px);
      font-size: 24px;
      font-weight: 700;
    }

    span {
      color: ${theme.colors.primary};
    }
  }
`