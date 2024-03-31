import styled from "styled-components";

export const TextContentStyled = styled.div`
  max-width: 406px;
  width: 100%;
  max-height: 280px;
  height: 100%;
  
  p {
    margin-top: 26px;
  }

  a {
    &:hover {
      transform: translate(0, -5%);
    }
  }
`