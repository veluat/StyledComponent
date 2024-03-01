import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const ImgBox = styled.div`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;

  @media ${theme.media.tablet} {
    height: 400px;
  }

  @media ${theme.media.mobile} {
    height: 350px;
  }

  @media ${theme.media.extraMobile} {
    height: 250px;
  }
`

export const FirstPhoto = styled.div`
  max-width: 410px;
  width: 65%;
  max-height: 376px;
  height: 82%;
  border-radius: 20px;
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 1;
  transform: rotate(-11.16deg);
`

export const SecondPhoto = styled.div`
  max-width: 282px;
  width: 45%;
  max-height: 348px;
  height: 76%;
  border-radius: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: inherit;
`