import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;

  @media screen and (max-width: 1410px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`