import React from 'react';
import {Title} from "../title/Title";
import {Span} from "../span/Span";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {theme} from "../../style/Theme";

type FrameProps = {
    title: string
    primary: string[]
    spanText: string
}

export const Frame = (props: FrameProps) => {
    const {title, primary, spanText} = props
    return (
        <StyledFrame>
            <FlexWrapper direction={"column"} gap='16px'>
                <Title title={title} primary={primary}/>
                <Span spanText={spanText}/>
            </FlexWrapper>
        </StyledFrame>
    );
};

const StyledFrame = styled.div`
  :nth-child(-n + 2) {
    padding-right: 28px;
    border-right: 1px solid ${theme.colors.primary}
  }  
  :first-child {
    padding-right: 56px;
  }
`