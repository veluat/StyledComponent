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
  padding: 12px 40px;
  background-color: #131E3A;
  border-radius: 8px;
  border: 1px solid #D3F85A;
  color: #D3F85A;
  font-family: Inter sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  width: 168px;
`