import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StyledFooter = styled.footer`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: ${theme.padding};

  @media ${theme.media.mobile} {
    padding: 60px 16px 40px;
  }

  p {
    margin: 30px 0 24px;
    text-align: left;
  }
`
export const FooterContentWrapper = styled.div`
  border-bottom: 1px solid ${theme.colors.fontGray};
  margin-left: 19px;
  display: flex;
  justify-content: space-between;
  max-width: 1253px;
  width: 100%;
  min-height: 232px;
  height: 100%;
  flex-wrap: wrap;

  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 16px 40px;
  }
`

export const FooterLogoWrapper = styled.div`
  max-width: 272px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 14px;

  p {
    margin: 0 0 8px 0;
  }
  
  @media ${theme.media.tablet} {
    align-items: flex-start;
  }
`

export const FooterColumnWrapper = styled.div`
    max-width: 688px;
    width: 100%;
    padding-top: 7px;
`