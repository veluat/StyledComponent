import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const FooterMenuItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  
  h3 {
    color: ${theme.colors.pureWhite};
  }
`