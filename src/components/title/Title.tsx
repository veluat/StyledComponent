import React from 'react';
import styled from "styled-components";
import {theme} from "../../style/Theme";
import {font} from "../../style/Common";

type TitlePropsType = {
    title: string
    title2?: string
    mainTitle?: boolean
    primary: string[]
    width?: string
}

export const Title = (props: TitlePropsType) => {
    const {title, primary, title2, mainTitle, ...rest} = props;
    return (
        props.mainTitle ? <StyledH1>{props.title}<StyledSpan>{props.primary}</StyledSpan></StyledH1> :
            <StyledH2 width={props.width} {...rest}><StyledSpan>{props.primary[0]}</StyledSpan>{props.title}<StyledSpan>{props.primary[1]}</StyledSpan>{props.title2}
            </StyledH2>
    );
};

const StyledH1 = styled.h1`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 64, Fmin: 39})}
  max-width: 544px;

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

const StyledH2 = styled.h2<{width?: string}>`
  ${font({family: "'Canela Text Trial', sans-serif", Fmax: 48, Fmin: 31})}
  display: inline-block;
  max-width: ${props => props.width};

  @media ${theme.media.tablet} {
    text-align: center;
  }
`

const StyledSpan = styled.span`
  display: inline;
  color: #D3F85A;
`