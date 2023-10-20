import React from 'react';
import styled from "styled-components";

type TitlePropsType = {
    title: string
    h1?: boolean
}

export const Title = (props: TitlePropsType) => {
    return (
        !props.h1 ? <StyledH1>{props.title}</StyledH1> : <StyledH2>{props.title}</StyledH2>
    );
};

const StyledH1 = styled.h1`
`

const StyledH2 = styled.h2`
    
`