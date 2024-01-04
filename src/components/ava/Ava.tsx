import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Span } from "../span/Span";

type AvaProps = {
    xlinkHref: string;
    spanText: string[];
};

export const Ava = (props: AvaProps) => {
    const { xlinkHref, spanText } = props;

    return (
        <AvaBox>
            <FlexWrapper gap='12px' justify='flex-start' align='center'>
                <svg width='48px' height='48px'>
                    <image xlinkHref={xlinkHref} />
                </svg>
                <FlexWrapper direction='column' gap='4px'>
                    <Span spanText='Owner' fontSize='14px' lineHeight='22px' fontWeight='400' />
                    {spanText.map((text, index) => (
                        <Span spanText={text[index]} fontSize='16px' lineHeight='20px' fontWeight='700' />
                    ))}
                </FlexWrapper>
            </FlexWrapper>
        </AvaBox>
    );
};

const AvaBox = styled.div`
  width: 173px;
`;