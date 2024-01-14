import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`