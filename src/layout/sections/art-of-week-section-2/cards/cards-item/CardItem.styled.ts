import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

export const CardItemStyled = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 498px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.secondaryBg};
  position: relative;

  @media ${theme.media.mobile} {
    padding: 16px;
  }
  
  span {
    ${font({
      color: `${theme.colors.fontGray}`,
      Fmax: 14,
      Fmin: 14,
    })}
  }
`

export const CardImage = styled.div``
export const CardPrice = styled.div``
export const CardTitle = styled.div``
export const CardFullness = styled.div``