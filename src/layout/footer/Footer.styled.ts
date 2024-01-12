import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StyledFooter = styled.footer`
  gap: 48px;
  max-width: 1512px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: ${theme.padding};

  @media ${theme.media.mobile} {
    padding: 60px 16px 40px;
  }

  p {
    margin: 30px 0 24px;
  }
`
export const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(131, 131, 130, 1);
  padding-bottom: 48px;
`