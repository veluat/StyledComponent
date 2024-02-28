import styled from "styled-components";

export const StyledPromotion = styled.div`
  width: 304px;
  max-height: 169px;
  border-radius: 16px;
  border-top: 1px solid #D3F85A;
  padding: 20px;
  background-color: #131E3A;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 0 9px 50px rgba(23, 36, 65, 0.04);

  @media screen and (max-width: 1128px) {
    right: -33px;
    bottom: -58px;
  }
`
