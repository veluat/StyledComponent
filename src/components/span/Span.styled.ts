import styled from "styled-components";

export const StyledSpanContent = styled.span<{
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    color?: string
}>`
  font-family: Inter, sans-serif;
  font-weight: ${props => props.fontWeight || '400px'};
  font-size: ${props => props.fontSize || '16px'};
  line-height: ${props => props.lineHeight || '26px'};
  color: ${props => props.color || '#FFFFFD'};
`