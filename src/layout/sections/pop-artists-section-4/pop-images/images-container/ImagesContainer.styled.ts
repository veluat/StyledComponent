import styled from "styled-components";

export const StyledDiv = styled.div<{
    width: string;
    height: string;
    bg: string;
    position?: boolean
}>`
  max-width: ${props => props.width};
  width: 100%;
  max-height: ${props => props.height};
  height: 100%;
  background-image: url(${props => props.bg});
  background-position: ${props => !props.position ? 'center -35px' : 'center top'};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  position: relative;
`

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-image: linear-gradient(to top, rgba(19, 30, 58, 0.98) 0%, rgba(19, 30, 58, 0) 100%);
  border-radius: 16px;
`

export const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 24px;
`