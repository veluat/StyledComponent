import styled from "styled-components";
import {font} from "@assets/style/Common.ts";
import {theme} from "@assets/style/Theme.ts";

export const StyledH1 = styled.h1`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 64, Fmin: 39})}
  max-width: 644px;
  width: 100%;
  text-align: left;
  display: inline-block;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

export const StyledH2 = styled.h2<{ width?: string }>`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 48, Fmin: 31})}
  display: inline-block;
  text-align: left;
  max-width: ${props => props.width};
  width: 100%;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

export const StyledSpan = styled.span`
  display: inline;
  color: #D3F85A;
`