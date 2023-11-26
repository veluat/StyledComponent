import React from 'react';
import styled from "styled-components";

type PContentType = {
    text: string
    width?: string
}

export const PContent = (props: PContentType) => {
    const {text, width, ...rest} = props
    return (
        <StyledTextContent width={width} {...rest}>
            {text}
        </StyledTextContent>
    );
};

const StyledTextContent = styled.p<{width?: string}>`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 253, 1);
  line-height: 26px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: ${props => props.width || '544px'};
`