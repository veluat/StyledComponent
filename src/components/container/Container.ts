import styled from "styled-components";
import {theme} from "../../assets";

export const Container = styled.section`
  max-width: 1512px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: ${theme.padding};

  @media ${theme.media.mobile} {
    padding: 60px 16px 40px;
  }
`