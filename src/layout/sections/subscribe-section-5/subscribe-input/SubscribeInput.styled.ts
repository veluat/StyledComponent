import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

export const SubscribeInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
`
export const InputStyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 516px;
  width: 100%;
  height: 54px;
  background-color: ${theme.colors.secondaryBg};
  border-radius: 8px;
`

export const InputStyled = styled.input.attrs({title: 'text'})`
  max-width: 356px;
  width: 100%;
  height: 54px;
  padding: 16px 24px;
  ${font({color: `${theme.colors.headerLink}`, Fmax: 16, Fmin: 16})};
  border-radius: 8px;
  border: 1px solid ${theme.colors.secondaryBg};
  background-color: transparent;
`