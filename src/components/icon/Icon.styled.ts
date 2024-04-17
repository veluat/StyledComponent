import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const Icon = styled.div`
    display: flex;
    transition: ${theme.transition};
    transform: translateY(-3px);

    @media ${theme.media.tablet} {
        transform: translateY(13px);
    }
`
export const S = {Icon}