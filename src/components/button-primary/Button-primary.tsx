import React from 'react';
import styled from "styled-components";
import { theme } from '../../style/Theme';

type ButtonType = {
    buttonName: string
    width?: string
    head?: boolean
}

export const ButtonPrimary = (props: ButtonType) => {
    const {buttonName, ...rest} = props;
    return (
            <StyledButton {...rest}>
                {props.buttonName}
            </StyledButton>
    );
};

const StyledButton = styled.a<{ width?: string, head?: boolean }
>`
  padding: 12px 40px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  border-color: transparent;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #090F1D;
  width: ${props => props.width || '134px'};
  
  @media ${theme.media.tablet} {
    display: ${props => props.head  ? "none" : 'inline'};
  }
`