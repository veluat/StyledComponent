import styled from "styled-components";
import {font} from "@assets/style/Common.ts";
import {theme} from "@assets/style/Theme.ts";

export const DescriptionStyled = styled.p<{ width?: string }>`
  ${font({lineHeight: 1.6, weight: 400, Fmax: 16, Fmin: 16})}

  margin-top: 34px;
  margin-bottom: 39px;
  max-width: ${props => props.width || '544px'};

  @media ${theme.media.tablet} {
    text-align: center;
  }
`