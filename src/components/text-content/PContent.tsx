import React from 'react';
import styled from "styled-components";

type PContentType = {
    text: string
}

export const PContent = (props: PContentType) => {
    return (
        <StyledTextContent>
            {props.text}
        </StyledTextContent>
    );
};

const StyledTextContent = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 253, 1);
  line-height: 26px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 475px;
`