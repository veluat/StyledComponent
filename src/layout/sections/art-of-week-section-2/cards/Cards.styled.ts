import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-basis: 343px;
  width: 100%;
  flex-wrap: nowrap;
  flex-grow: 1;
  position: relative;

  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }
`
