import {SectionContainer} from "@components/section-container";
import {SubscribePhotos} from "@layout/sections/subscribe-section-5/subscribe-photos/SubscribePhotos.tsx";
import {SubscribeContent} from "@layout/sections/subscribe-section-5/subscribe-content/SubscribeContent.tsx";
import {S} from "@layout/sections/subscribe-section-5/Subscribe.styled.ts";
import {Fade} from "react-awesome-reveal";

export const Subscribe = () => {
    return (
        <Fade delay={400} triggerOnce={true}>
            <SectionContainer id='subscribe'>
                <S.SubscribeWrapper>
                    <SubscribePhotos/>
                    <SubscribeContent/>
                </S.SubscribeWrapper>
            </SectionContainer>
        </Fade>
    )
}