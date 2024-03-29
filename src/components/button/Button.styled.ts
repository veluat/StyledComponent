import styled, {css} from "styled-components";
import {font} from "@assets/style/Common.ts";
import {theme} from "@assets/style/Theme.ts";

export const Button = styled.button<ButtonPropsType>`
    ${font({
        weight: 700,
        lineHeight: 1.2,
        Fmax: 16,
        Fmin: 16
    })};
    border-radius: 8px;
    cursor: pointer;

    height: ${props => props.height || '52px'};

    background-color: ${props => props.btnType === 'outlined' ? `${theme.colors.secondaryBg}` : `${theme.colors.primary}`};

    border: ${props => props.btnType === 'outlined' ? `1px solid ${theme.colors.primary}` : '1px solid transparent'};

    color: ${props => props.btnType === 'outlined' ? `${theme.colors.primary}` : `${theme.colors.primaryBg}`};

    &:hover {
        transform: translate(0, -5%);
    }

    ${({btnType}) =>
            btnType === 'outlined' &&
            css<ButtonPropsType>`
                width: ${props => props.width || '100%'};
            `}

    ${({btnType}) =>
            btnType === 'primary' &&
            css<ButtonPropsType>`
                width: ${props => props.width || '143px'};

                @media ${theme.media.tablet} {
                    display: ${props => props.height ? "none" : 'inline'};
                }
            `}
`
export const S = {Button}

type ButtonPropsType = {
    width?: string
    height?: string
    btnType: 'outlined' | 'primary'
}
  




