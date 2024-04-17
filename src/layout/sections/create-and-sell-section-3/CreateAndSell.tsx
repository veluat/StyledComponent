import {SectionContainer} from "@components/section-container";
import {CreateAndSellContent} from "@layout/sections/create-and-sell-section-3/create-and-sell-content";
import {
    CreateAndSellPhoto
} from "@layout/sections/create-and-sell-section-3/create-and-sell-photo/CreateAndSellPhoto.tsx";
import {S} from "@layout/sections/create-and-sell-section-3/CreateAndSell.styled.ts";
import {Fade} from "react-awesome-reveal";

export const CreateAndSell = () => {
    return (
        <Fade delay={400} triggerOnce={true}>
            <SectionContainer id='best'>
                <S.CreateAndSellWrapper>
                    <CreateAndSellContent/>
                    <CreateAndSellPhoto/>
                </S.CreateAndSellWrapper>
            </SectionContainer>
        </Fade>
    );
};