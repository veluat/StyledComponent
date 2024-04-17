import React from 'react';
import {S} from "@layout/sections/subscribe-section-5/subscribe-input/SubscribeInput.styled.ts";
import {Button} from "@components/button/Button.tsx";

export const SubscribeInput: React.FC = () => {
    return (
        <S.SubscribeInputWrapper>
            <S.InputStyled type='text' placeholder='Enter your e-mail'/>
            <Button btnType='primary' buttonName='Subscribe' width='160px'/>
        </S.SubscribeInputWrapper>
    )
}