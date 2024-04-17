import styled from "styled-components";

const SectionHeader = styled.div<{ isHide: boolean }>`
    max-width: 1227px;
    width: 100%;
    height: 116px;
    display: flex;
    justify-content: ${props => props.isHide ? 'center' : 'space-between'};
    align-items: ${props => props.isHide ? '' : 'center'};
`

export const S = {SectionHeader}