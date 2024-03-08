import styled from "styled-components";

export const SectionHeader = styled.div<{ isHide: boolean }>`
  display: flex;
  justify-content: ${props => props.isHide ? 'center' : 'space-between'};
  align-items: ${props => props.isHide ? 'center' : 'flex-end'};
`