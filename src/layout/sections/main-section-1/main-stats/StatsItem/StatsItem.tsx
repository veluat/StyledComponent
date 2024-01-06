import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Title} from "../../../../../components/title/Title";
import {Span} from "../../../../../components/span/Span";
import styled from "styled-components";
import {theme} from "../../../../../assets/style/Theme";

type FrameProps = {
    title: string
    primary: string[]
    spanText: string
}

export const StatsItem = (props: FrameProps) => {
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
    padding-right: 24px;
    border-right: 1px solid ${theme.colors.primary}
  }  
  :first-child {
    padding-right: 29px;
  }
`