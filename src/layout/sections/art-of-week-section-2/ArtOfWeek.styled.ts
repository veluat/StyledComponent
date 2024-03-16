import styled from "styled-components";

export const SectionHeader = styled.div<{ isHide: boolean }>`
  height: 116px;
  padding-bottom: 4px;
  display: flex;
  justify-content: ${props => props.isHide ? 'center' : 'space-between'};
  align-items: ${props => props.isHide ? 'center' : 'flex-end'};
`