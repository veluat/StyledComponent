import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 64px;
  max-width: 1290px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;