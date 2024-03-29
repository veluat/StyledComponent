import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const Menu = styled.nav`
    max-width: 435px;
    width: 100%;

    ul {
        display: flex;
        gap: 40px;
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

export const S = {
    Menu,
    ListItem
}