import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-items: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`

export const ListItem = styled.li`
  a {
    color: ${theme.colors.headerLink};

    &:hover,
    &:active {
      color: ${theme.colors.pureWhite};
      border-bottom: 1px solid ${theme.colors.primary};
      padding-bottom: 3px;
    }
  }
`