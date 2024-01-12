import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const CardItemStyled = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 498px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.secondaryBg};


  @media ${theme.media.mobile} {
    max-width: 343px;
  }
`
export const StyledH5 = styled.h5`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`
export const StyledH4 = styled.h4`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`
export const StyledSpan = styled.span`
  color: ${theme.colors.fontGray};
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
