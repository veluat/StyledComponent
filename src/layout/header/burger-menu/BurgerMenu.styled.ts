import styled, {css} from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const BurgerMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    background-color: rgba(9, 15, 29, 0.98);
    display: none;

    ${props =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                display: flex;
                justify-content: center;
                align-items: center;
            `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        a {
            color: ${theme.colors.fontGray};
            font-size: 22px;
        }
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 40px;
    right: 30px;
    width: 30px;
    height: 30px;
    z-index: 9999999999;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.pureWhite};
        position: absolute;
        left: 3px;
        bottom: 14px;

        ${({isOpen}) =>
                isOpen &&
                css<{ isOpen: boolean }>`
                    background-color: rgba(255, 255, 255, 0);
                `}
        
        &::before {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.pureWhite};
            position: absolute;
            transform: translateY(-10px);

            ${({isOpen}) =>
                    isOpen &&
                    css<{ isOpen: boolean }>`
                        transform: rotate(-45deg) translateY(0);
                    `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.pureWhite};
            position: absolute;
            transform: translateY(10px);

            ${({isOpen}) =>
                    isOpen &&
                    css<{ isOpen: boolean }>`
                        transform: rotate(45deg) translateY(0);
                    `}
        }
    }
`

const ListItem = styled.li``

const CustomLink = styled.a`
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: ${theme.colors.fontGray};
    position: relative;
    text-align: center;

    &:hover {
        color: ${theme.colors.fontWhite};
        border-bottom: 1px solid ${theme.colors.primary};
        padding-bottom: 3px;
    }

    &:active {
        color: ${theme.colors.fontWhite};
        border-bottom: 1px solid ${theme.colors.primary};
        padding-bottom: 3px;
    }
`

export const S = {
    BurgerMenu,
    BurgerMenuPopup,
    BurgerButton,
    ListItem,
    CustomLink
}