import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const TextContentStyled = styled.div`
  max-width: 544px;
  height: 585px;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    width: 343px;
  }
`