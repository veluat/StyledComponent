import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;
  
  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`