import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {font} from "@assets/style/Common.ts";

export const LogoWrapper = styled.div`
  position: relative;
  transform: translateX(-1px) translateY(13px);

  h3 {
    ${font({
      family: 'Canela Trial',
      weight: 500,
      Fmax: 32,
      Fmin: 24,
    })}
    
    @media ${theme.media.tablet} {
      transform: translateY(-10px);
      font-weight: 700;
    }
  }

  span {
    color: ${theme.colors.primary};
  }
}
`