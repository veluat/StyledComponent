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

export const InputStyled = styled.input.attrs({title: 'text'})`
  width: 100%;
  height: 54px;
  padding: 16px 24px;
  ${font({weight: 400, color: 'rgba(255, 255, 253, 0.7)'})};
  border-radius: 8px;
  border: 1px solid ${theme.colors.secondaryBg};
  background-color: ${theme.colors.secondaryBg};
`
