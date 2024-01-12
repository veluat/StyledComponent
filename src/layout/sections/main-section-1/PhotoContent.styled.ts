import styled from "styled-components";

export const PhotoContentStyled = styled.div`
  max-width: 575px;
  height: 637px;
  position: relative;
  flex-grow: 1;

  &:before {
    content: '';
    position: absolute;
    right: 236px;
    bottom: 20px;
    width: 631px;
    height: 458px;
    background-image: radial-gradient(260px 260px, rgba(31, 65, 61, 1), rgba(31, 65, 61, 0));
  }

  &:after {
    content: '';
    position: absolute;
    right: -33px;
    bottom: -58px;
    width: 352px;
    height: 221px;
    background-image: radial-gradient(65% 55%, rgba(26, 38, 82, 1), rgba(26, 38, 82, 0));
  }
`

