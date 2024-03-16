import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const PhotoContentStyled = styled.div`
  width: 568px;
  height: 637px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 100;
  
  &:before {
    content: '';
    position: absolute;
    right: 170px;
    bottom: -70px;
    width: 631px;
    height: 558px;
    z-index: 0;
    background-image: radial-gradient(52% 55.5%, rgba(31, 65, 61, 0.95), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    right: -14%;
    bottom: -12%;
    width: 402px;
    height: 221px;
    z-index: 0;
    background-image: radial-gradient(53% 57%, rgba(26, 38, 82, 0.8), transparent);
  }

  @media ${theme.media.mobile} {
    width: 343px;
    height: 420px;
  }
`