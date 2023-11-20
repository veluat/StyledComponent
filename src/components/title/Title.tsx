import React from 'react';
import styled from "styled-components";

type TitlePropsType = {
    title: string
    title2?: string
    mainTitle?: boolean
    primary: string[]

}

export const Title = (props: TitlePropsType) => {
    return (
        props.mainTitle ? <StyledH1>{props.title}<StyledSpan>{props.primary}</StyledSpan></StyledH1> :
            <StyledH2><StyledSpan>{props.primary[0]}</StyledSpan>{props.title}<StyledSpan>{props.primary[1]}</StyledSpan><br/>{props.title2}
            </StyledH2>
    );
};

const StyledH1 = styled.h1`
  width: 506px;
  font-family: Canela, sans-serif;
  font-weight: 500;
  font-size: 64px;
  color: #FFFFFD;
  line-height: 76px;
`
const StyledH2 = styled.h2`
  width: 506px;
  font-family: Canela, sans-serif;
  font-weight: 500;
  font-size: 48px;
  color: #FFFFFD;
  line-height: 58px;
`
const StyledSpan = styled.span`
  color: #D3F85A;
`