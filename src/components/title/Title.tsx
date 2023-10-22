import React from 'react';
import styled from "styled-components";

type TitlePropsType = {
    title: string
    mainTitle?: boolean
    primary: string[]

}

export const Title = (props: TitlePropsType) => {
    return (
            props.mainTitle ? <StyledH1>{props.title} <StyledSpan>{props.primary}</StyledSpan></StyledH1> : <StyledH2><StyledSpan>{props.primary[0]}</StyledSpan> {props.title}<StyledSpan>{props.primary[1]}</StyledSpan></StyledH2>
    );
};

const StyledH1 = styled.h1`
  width: 272px;
  font-family: Inter sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: #FFFFFD;
  line-height: 38px;
`
const StyledH2 = styled.h2`
  width: 272px;
`
const StyledSpan = styled.span`
  color: #D3F85A;
`;