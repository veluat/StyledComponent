import React from 'react';
import styled from "styled-components";

type ButtonType = {
    buttonName: string
    width?: string
}

export const ButtonPrimary = (props: ButtonType) => {
    const {buttonName, ...rest} = props;
    return (
        <StyledButton {...rest}>
            {props.buttonName}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ width?: string }
>`
  padding: 12px 40px;
  background-color: #D3F85A;
  border-radius: 8px;
  border-color: transparent;
  font-family: Inter sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #090F1D;
  width: ${props => props.width || '134px'};
`