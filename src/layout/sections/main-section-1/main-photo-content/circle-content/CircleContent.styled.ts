import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const Star = styled.div`
  position: absolute;
  top: 48%;
  padding-left: 5px;

    @media ${theme.media.tablet} {
     left: 0;
   }

  @media screen and (max-width: 640px) {
   top: 290px;
  }
`

export const Group = styled.div`
  position: absolute;
  top: 238px;
  left: -60px;
  
  @media screen and (max-width: 640px) {
    left: -25px;
    top: 260px;
  }
`