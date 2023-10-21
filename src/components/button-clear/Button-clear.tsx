import React from 'react';
import styled from "styled-components";

type ButtonType = {
    buttonName: string
    width?: string
}

export const ButtonClear = (props: ButtonType) => {
    return (
        <StyledButtonClear>
            {props.buttonName}
        </StyledButtonClear>
    );
};

const StyledButtonClear = styled.button`
  padding: 6px 20px;
  background-color: #131E3A;
  border-radius: 4px;
  border: 0.5px solid #D3F85A;
  color: #D3F85A;
  font-family: Inter sans-serif;
  font-weight: 600;
  font-size: 9px;
  line-height: 10px;
  width: 112px;
`