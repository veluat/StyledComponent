import styled from "styled-components";
import {font} from "@assets/style/Common.ts";
import {theme} from "@assets/style/Theme.ts";

type PContentType = {
    text: string
    width?: string
}

export const TextContent = (props: PContentType) => {
    const {text, width, ...rest} = props
    return (
        <StyledTextContent width={width} {...rest}>
            {text}
        </StyledTextContent>
    );
};

const StyledTextContent = styled.p<{ width?: string }>`
  ${font({lineHeight: 1.6, weight: 400, Fmax: 16, Fmin: 16})}

  margin-top: 20px;
  margin-bottom: 40px;
  max-width: ${props => props.width || '544px'};

  @media ${theme.media.tablet} {
    text-align: center;
  }
`