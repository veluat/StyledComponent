import React from 'react';
import {PrimaryButton} from "@components/primary-button";
import {
    InputStyled, SubscribeInputWrapper
} from "@layout/sections/subscribe-section-5/subscribeInput/SubscribeInput.styled.ts";

export const SubscribeInput: React.FC = () => {
    return (
        <SubscribeInputWrapper>
            <InputStyled type="text" placeholder='Enter your e-mail'/>
            <PrimaryButton buttonName='Subscribe' width='160px'/>
        </SubscribeInputWrapper>
    )
}