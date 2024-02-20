import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

export const CardsItemStyled = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 498px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.secondaryBg};
  position: relative;
  
  }
`

export const StyledSpan = styled.span`
  ${font({
    weight: 400,
    lineHeight: 1.6,
    color: `${theme.colors.fontGray}`,
    Fmax: 14,
    Fmin: 14,
  })}
`
