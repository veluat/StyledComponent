import styled from "styled-components";

export const Star = styled.div`
  position: absolute;
  left: 10%;
  top: 45.5%;
  padding-left: 5px;

  @media screen and (max-width: 620px) {
    padding-left: 0;
    left: 11%;
  }

  @media screen and (max-width: 576px) {
    left: 8%;
  }
`

export const Group = styled.div`
  position: absolute;
  left: -1%;
  top: 35%;
  
  @media screen and (max-width: 620px) {
  }
  
  @media screen and (max-width: 576px) {
    left: -1%;
    top: 42.3%;
  }
`