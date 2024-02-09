import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const PopGrid = styled.div`
  display: grid;
  gap: 30px;
  max-height: 1844px;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 310px);
    margin-top: 0;
  }
`

export const PopGridItem = styled.div`
  &:first-child {
    grid-column: 1/4;
    grid-row: span 1;
    grid-area: 1/1/2/4;

    @media ${theme.media.tablet} {
      grid-area: 1/1/2/13;
    }
  }

  &:nth-child(2) {
    grid-area: 1/4/2/9;

    @media ${theme.media.tablet} {
      grid-area: 2/1/3/13;
    }
  }

  &:nth-child(3) {
    grid-area: 2/1/3/5;

    @media ${theme.media.tablet} {
      grid-area: 4/1/5/13;
    }
  }

  &:nth-child(4) {
    grid-area: 2/5/3/9;

    @media ${theme.media.tablet} {
      grid-area: 5/1/6/13;
    }
  }

  &:last-child {
    grid-area: 1/9/3/13;

    @media ${theme.media.tablet} {
      grid-area: 3/1/4/13;
    }
  }
`