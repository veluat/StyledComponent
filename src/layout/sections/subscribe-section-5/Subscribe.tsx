import {Container} from "@components/container";
import {SubscribePhotos} from "@layout/sections/subscribe-section-5/subscribePhotos/SubscribePhotos.tsx";
import {SubscribeContent} from "@layout/sections/subscribe-section-5/subscribeContent/SubscribeContent.tsx";
import {SubscribeWrapper} from "@layout/sections/subscribe-section-5/Subscribe.styled.ts";

export const Subscribe = () => {
    return (
        <Container id='subscribe'>
            <SubscribeWrapper>
                <SubscribePhotos/>
                <SubscribeContent/>
            </SubscribeWrapper>
        </Container>
    );
};