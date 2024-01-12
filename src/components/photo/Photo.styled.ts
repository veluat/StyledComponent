import {theme} from "@assets/style/Theme.ts";
import styled from "styled-components";

export const StyledPhoto = styled.img<{
    width?: string;
    height?: string;
    radius?: string;
    margin?: string;
    marginBottom?: string;
    objectPosition?: string;
}>`
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  object-fit: cover;
  object-position: ${(props) => props.objectPosition || 'top'};
  border-radius: ${(props) => props.radius || '24px'};
  position: relative;
  margin-bottom: ${(props) => props.marginBottom || 0};

  @media ${theme.media.mobile} {
    width: 294px;
    height: 344px;
  }
`