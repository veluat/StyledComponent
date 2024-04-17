import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const Footer = styled.footer`
    margin: 0 auto;
    max-width: 1512px;
    width: 100%;
    min-height: 100%;
    padding: ${theme.padding};

    @media ${theme.media.mobile} {
        padding: 60px 16px 40px;
    }

    p {
        margin: 30px 0 24px;
        text-align: left;
    }
`
const FooterContentWrapper = styled.div`
    border-bottom: 1px solid ${theme.colors.fontGray};
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    max-width: 1512px;
    width: 100%;
    min-height: 100%;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 24px 16px 40px;
    }
`

const FooterLogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-bottom: 24px;

    @media ${theme.media.tablet} {
        align-items: flex-start;
    }
`

export const S = {
    Footer,
    FooterContentWrapper,
    FooterLogoWrapper
}