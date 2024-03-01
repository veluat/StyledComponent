import React from 'react';
import {
    InputStyled,
    SubscribeInputWrapper
} from "@layout/sections/subscribe-section-5/subscribe-input/SubscribeInput.styled.ts";
import {Button} from "@components/button/Button.tsx";

export const SubscribeInput: React.FC = () => {
    return (
        <SubscribeInputWrapper>
            <InputStyled type='text' placeholder='Enter your e-mail'/>
            <Button btnType='primary' buttonName='Subscribe' width='160px'/>
        </SubscribeInputWrapper>
    )
}