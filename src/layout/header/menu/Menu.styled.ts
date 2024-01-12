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

export const ListItem = styled.li``;

export const LinkStyled = styled.span`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontGray};
  position: relative;

  &:hover,
  &:active {
    color: ${theme.colors.fontWhite};
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: 3px;
  }
`;