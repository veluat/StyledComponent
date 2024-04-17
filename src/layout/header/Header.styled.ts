import styled, {css} from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const Header = styled.header<{isScrolled: boolean}>`
    border-radius: 16px;
    border-bottom: 1px solid ${theme.colors.secondaryBg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1512px;
    width: 100%;
    margin: 0 auto;
    height: 104px;
    padding: 28px 111px;
    background-color: rgba(5, 7, 16, 0.95);
    ${theme.transition};

    ${({isScrolled}) =>
            isScrolled &&
            css<{ isScrolled: boolean }>`
                position: sticky;
                left: 0;
                top: 0;
                z-index: 100;
                display: flex;
                justify-content: space-between;
                align-items: center;

            `
    } 
    
    @media ${theme.media.tablet} {
    padding: 0 16px;
}
`

export const S = {Header}