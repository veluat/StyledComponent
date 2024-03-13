import styled from "styled-components";

export const MainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`