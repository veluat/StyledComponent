import styled from "styled-components";

export const StyledDiv = styled.div<{
    width: string;
    height: string;
    bg: string;
    position?: string
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.bg});
  background-position-y: -35px;
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
  bottom: 24px;
  left: 24px;
`