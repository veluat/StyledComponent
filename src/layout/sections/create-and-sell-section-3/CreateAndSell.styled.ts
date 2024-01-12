import styled from "styled-components";

export const TextContentStyled = styled.div`
  width: 426px;
  height: 280px;
`

export const PhotoGroup = styled.div`
  width: 740px;
  height: 559px;
  position: relative;
`

export const FirstPhoto = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const SecondPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`