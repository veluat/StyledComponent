import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const ImgBox = styled.div`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;
`

export const FirstPhoto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: rotate(-12deg);
`

export const SecondPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`

export const ContentBox = styled.div`
  max-width: 520px;
  width: 100%;
  height: 288px;
`

export const InputStyled = styled.input.attrs({title: 'text'})`
  width: 516px;
  min-height: 28px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.secondaryBg};
  padding: 16px 24px;
  background-color: ${theme.colors.secondaryBg};
`
