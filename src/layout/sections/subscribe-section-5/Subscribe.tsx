import {SectionContainer} from "@components/section-container";
import {SubscribePhotos} from "@layout/sections/subscribe-section-5/subscribe-photos/SubscribePhotos.tsx";
import {SubscribeContent} from "@layout/sections/subscribe-section-5/subscribe-content/SubscribeContent.tsx";
import {SubscribeWrapper} from "@layout/sections/subscribe-section-5/Subscribe.styled.ts";

export const Subscribe = () => {
    return (
        <SectionContainer id='subscribe'>
            <SubscribeWrapper>
                <SubscribePhotos/>
                <SubscribeContent/>
            </SubscribeWrapper>
        </SectionContainer>
    )
}