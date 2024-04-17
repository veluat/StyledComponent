import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const DesktopMenu = styled.nav`
    max-width: 435px;
    width: 100%;

    ul {
        display: flex;
        gap: 30px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

export const S = {
    DesktopMenu
}