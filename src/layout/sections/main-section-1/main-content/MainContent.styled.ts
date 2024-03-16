import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 548px;
  width: 100%;
  max-height: 585px;
  height: 100%;
  
  a {
    &:hover {
      transform: translate(0, -5%);
    }
  }
  
  @media ${theme.media.mobile} {
    width: 343px;
  }
`