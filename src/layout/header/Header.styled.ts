import styled, { css, keyframes } from "styled-components";
import { theme } from "@assets/style/Theme.ts";

const slideDown = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`

const Header = styled.header<{ isScrolled: boolean }>`
    border-radius: 16px;
    border-bottom: 1px solid ${theme.colors.secondaryBg};
    height: 104px;
    background-color: rgba(5, 7, 16, 0.95);

    ${({ isScrolled }) =>
            isScrolled &&
            css<{ isScrolled: boolean }>`
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
                z-index: 999999;
                animation: ${slideDown} 1s ease-in-out 1;
            `}
`

const HeaderContainer = styled.div`
    max-width: 1512px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 111px;

    @media ${theme.media.tablet} {
        padding: 28px 16px;
    }
`

export const S = { Header, HeaderContainer }