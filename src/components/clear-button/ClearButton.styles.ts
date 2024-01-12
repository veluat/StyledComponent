import styled from "styled-components";

export const StyledButtonClear = styled.button<{ widthButtonClear?: string }>`
  padding: 12px 40px;
  background-color: #131E3A;
  border-radius: 8px;
  border: 1px solid #D3F85A;
  color: #D3F85A;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  width: ${props => props.widthButtonClear || '100%'};
`