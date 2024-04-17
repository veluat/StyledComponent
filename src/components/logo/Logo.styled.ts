import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

const LogoWrapper = styled.div`
    position: relative;

    h3 {
        ${font({
            family: 'Canela Trial',
            weight: 500,
            Fmax: 32,
            Fmin: 24,
        })}
        span {
            color: ${theme.colors.primary};
        }
    }

    @media ${theme.media.tablet} {
        font-size: 24px;
        font-weight: 700;
    }
`

export const S = {LogoWrapper}