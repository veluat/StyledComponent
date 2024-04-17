import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const StatsLineWrap = styled.div<{
    gap: string
}>`
    max-width: 509px;
    width: 100%;
    margin-top: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${props => props.gap};

    @media ${theme.media.mobile} {
        max-width: 343px;
        margin-top: 0;
    }
`

export const S = {StatsLineWrap}