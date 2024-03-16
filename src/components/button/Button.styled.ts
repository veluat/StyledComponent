import styled, {css} from "styled-components";
import {font} from "@assets/style/Common.ts";
import {theme} from "@assets/style/Theme.ts";

export const StyledButton = styled.button<StyledButtonPropsType>`
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
          css<StyledButtonPropsType>`
            width: ${props => props.width || '100%'};
          `}

  ${({btnType}) =>
          btnType === 'primary' &&
          css<StyledButtonPropsType>`
            width: ${props => props.width || '143px'};

            @media ${theme.media.tablet} {
              display: ${props => props.height ? "none" : 'inline'};
            }
          `}
`

type StyledButtonPropsType = {
    width?: string
    height?: string
    btnType: 'outlined' | 'primary'
}
  




