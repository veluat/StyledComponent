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
  font-family: Inter sans-serif;
  font-weight: 100;
  font-size: 9px;
  color: #FFFFFD;
  line-height: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
`