import styled from 'styled-components';

export const FlexWrapper = styled.div<FlexWrapperPropType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  gap: ${props => props.gap};
`

type FlexWrapperPropType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
}