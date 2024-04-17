import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const H1 = styled.h1`
    max-width: 544px;
    width: 100%;
    margin-top: -12px;

    @media ${theme.media.tablet} {
        text-align: center;
    }
`

const H2 = styled.h2<{ width?: string }>`
    max-width: ${props => props.width};
    width: 100%;
    margin-top: -7px;

    @media ${theme.media.tablet} {
        text-align: center;
    }
`
export const S = {H1, H2}

