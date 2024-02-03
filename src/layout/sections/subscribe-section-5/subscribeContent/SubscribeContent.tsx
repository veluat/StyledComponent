import {Title} from "@components/title";
import {TextContent} from "@components/text-content";
import React from "react";
import {SubscribeInput} from "@layout/sections/subscribe-section-5/subscribeInput/SubscribeInput.tsx";
import {ContentBox} from "@layout/sections/subscribe-section-5/subscribeContent/SubscribeContent.styled.ts";

export const SubscribeContent: React.FC = () => {
    const title = 'Subscribe And '
    const title2 = 'Every Week'
    const primary = ['', 'get our Updates ']
    return (
        <ContentBox>
                <Title title={title} primary={primary} title2={title2} width='520px'/>
                <TextContent
                    text={`We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly`}
                    width='520px'/>
                <SubscribeInput/>
        </ContentBox>
    )
}