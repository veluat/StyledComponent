import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const PhotoGroup = styled.div`
    max-width: 740px;
    width: 100%;
    height: 559px;
    position: relative;

    @media ${theme.media.tablet} {
        height: 450px;
    }

    @media ${theme.media.extraTablet} {
        height: 350px;
    }

    @media ${theme.media.extraMobile} {
        height: 250px;
    }
`
const FirstPhoto = styled.div`
    max-width: 410px;
    width: 55%;
    height: 71.5%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 20;
`

const SecondPhoto = styled.div`
    max-width: 410px;
    width: 55%;
    height: 90%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
`
export const S = {
    PhotoGroup,
    FirstPhoto,
    SecondPhoto
}