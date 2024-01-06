import React from 'react';
import styled from "styled-components";
import {theme} from "@assets/style/Theme";
import {font} from "@assets/style/Common";

type TitlePropsType = {
    title: string
    title2?: string
    mainTitle?: boolean
    primary: string[]
    width?: string
}

export const Title = (props: TitlePropsType) => {
    const {title, primary, title2, mainTitle, width, ...rest} = props;
    return (
        mainTitle ?
            <StyledH1>{title}
                <StyledSpan>{primary}</StyledSpan>
            </StyledH1>
            : <StyledH2 width={width} {...rest}>
                <StyledSpan>{primary[0]}</StyledSpan>
                {title}
                <StyledSpan>{primary[1]}</StyledSpan>
                {title2}
            </StyledH2>
    );
};

const StyledH1 = styled.h1`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 64, Fmin: 39})}
  max-width: 644px;
  width: 100%;
  text-align: left;
  display: inline-block;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

const StyledH2 = styled.h2<{ width?: string }>`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 48, Fmin: 31})}
  display: inline-block;
  text-align: left;
  max-width: ${props => props.width};
  width: 100%;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

const StyledSpan = styled.span`
  display: inline;
  color: #D3F85A;
`