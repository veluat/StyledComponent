import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

export const StatusCardBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  span {
    ${font({
      weight: 500,
      color: theme.colors.fontGray,
      Fmax: 14,
      Fmin: 14,
    })}
  }
`