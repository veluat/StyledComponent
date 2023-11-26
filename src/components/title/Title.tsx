import React from 'react';
import styled from "styled-components";

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
  width: 544px;
  font-family: 'Canela Text Trial', sans-serif;
  font-size: 64px;
  color: #FFFFFD;
  line-height: 77px;
  font-weight: 500;
`
const StyledH2 = styled.h2<{width?: string}>`
  display: inline-block;
  width: ${props => props.width};
  font-family: 'Canela Text Trial', sans-serif;
  font-size: 48px;
  color: #FFFFFD;
  line-height: 58px;
  font-weight: 500;
`

const StyledSpan = styled.span`
  display: inline;
  color: #D3F85A;
`