import React from "react";
import {Title} from "@components/title";
import {Description} from "@components/description";
import {SubscribeInput} from "@layout/sections/subscribe-section-5/subscribe-input/SubscribeInput.tsx";
import {ContentBox} from "@layout/sections/subscribe-section-5/subscribe-content/SubscribeContent.styled.ts";

export const SubscribeContent: React.FC = () => {

    return (
        <ContentBox>
            <Title title={<div>Subscribe And <span>get our Updates</span> Every Week</div>} width='520px'/>
            <Description
                description='We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly'
                width='520px'/>
            <SubscribeInput/>
        </ContentBox>
    )
}