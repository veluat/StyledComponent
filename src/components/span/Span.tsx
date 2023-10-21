import React from 'react';
import styled from "styled-components";

type SpanType = {
    spanText?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    color?: 'primary'
}

export const Span = (props: SpanType) => {
    return (
        <StyledSpanContent>
            {props.spanText}
        </StyledSpanContent>
    );
};

const StyledSpanContent = styled.span<SpanType>`
  font-family: Inter sans-serif;
  font-weight: ${props => props.fontWeight || '100px'};
  font-size: ${props => props.fontSize || '9px'};
  line-height: ${props => props.fontSize || '12px'};
  color: ${props => props.color === 'primary' ? '#D3F85A' : '#FFFFFD'};
  width: 55px;
`