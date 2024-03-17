import React from 'react';
import {
    InputStyled,
    InputStyledWrap,
    SubscribeInputWrapper
} from "@layout/sections/subscribe-section-5/subscribe-input/SubscribeInput.styled.ts";
import {Button} from "@components/button";

export const SubscribeInput: React.FC = () => {
    return (
        <SubscribeInputWrapper>
            <InputStyledWrap>
                <InputStyled type='text' placeholder='Enter your e-mail'/>
                <Button btnType='primary' buttonName='Subscribe' width='160px'/>
            </InputStyledWrap>
        </SubscribeInputWrapper>
    )
}