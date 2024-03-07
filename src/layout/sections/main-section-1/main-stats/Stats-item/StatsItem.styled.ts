import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const StatsItemWrap = styled.div<{
    isLastItem: boolean,
    isFirstItem: boolean,
    isMobile: boolean
}
>`
  display: flex;
  padding-right: ${(props) => (props.isFirstItem ? "28px" : props.isLastItem ? "0" : "24px")};
  border-right: ${(props) => (props.isLastItem ? "none" : `1px solid ${theme.colors.primary}`)};
`