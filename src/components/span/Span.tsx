import React from 'react';
import styled from "styled-components";

type SpanType = {
    spanText?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    color?: string
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
  font-weight: ${props => props.fontWeight || '400px'};
  font-size: ${props => props.fontSize || '16px'};
  line-height: ${props => props.fontSize || '26px'};
  color: ${props => props.color || '#FFFFFD'};
  //width: 55px;
`