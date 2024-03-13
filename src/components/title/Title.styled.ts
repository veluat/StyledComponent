import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const H1Styled = styled.h1`
  max-width: 644px;
  width: 100%;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

export const H2Styled = styled.h2<{ width?: string }>`
  max-width: ${props => props.width};
  width: 100%;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`


