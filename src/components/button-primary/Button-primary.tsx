import React from 'react';
import styled from "styled-components";

type ButtonType = {
    buttonName: string
}
export const ButtonPrimary = (props: ButtonType) => {
    return (
        <StyledButton>
            {props.buttonName}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  padding: 6px 20px;
  background-color: #D3F85A;
  border-radius: 4px;
  border-color: transparent;
  font-family: "Inter Semi Bold",sans-serif;
  font-weight: 600;
  font-size: 9px;
  line-height: 10px;
  color: #090F1D;
`