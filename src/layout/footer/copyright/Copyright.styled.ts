import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1512px;
  width: 100%;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 0 16px 40px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  a {
    &:hover {
      transform: translate(0, -10%);
    }
  }
`

export const CopyrightStyled = styled.small`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontWhite};
`
