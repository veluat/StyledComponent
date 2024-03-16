import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 3333;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 16px;
  border-bottom: 1px solid ${theme.colors.secondaryBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1512px;
  width: 100%;
  margin: 0 auto;
  height: 104px;
  padding: 28px 111px;
  background-color: rgba(5, 7, 16, 0.95);

  @media ${theme.media.tablet} {
    padding-left: 16px;
    padding-top: 40px;
  }
`