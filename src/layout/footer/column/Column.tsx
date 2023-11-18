import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Span} from "../../../components/span/Span";

type ColumnType = {
    text: string[]
}

export const Column = (props: ColumnType) => {
    const {text} = props
    return (
        <FlexWrapper direction='column' justify='center' gap='24px'>
            <h3>{text[0]}</h3>
            <FlexWrapper direction='column' justify='center' gap='8px'>
                <Span spanText={text[1]}/>
                <Span spanText={text[2]}/>
                <Span spanText={text[3]}/>
                <Span spanText={text[4]}/>
            </FlexWrapper>
        </FlexWrapper>
    );
};