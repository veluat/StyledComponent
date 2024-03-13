import {SectionContainer} from "@components/section-container";
import {CreateAndSellContent} from "@layout/sections/create-and-sell-section-3/create-and-sell-content";
import {CreateAndSellPhoto} from "@layout/sections/create-and-sell-section-3/create-and-sell-photo/CreateAndSellPhoto.tsx";
import {CreateAndSellWrapper} from "@layout/sections/create-and-sell-section-3/CreateAndSell.styled.ts";

export const CreateAndSell = () => {
    return (
        <SectionContainer id='best'>
            <CreateAndSellWrapper>
                <CreateAndSellContent/>
                <CreateAndSellPhoto/>
            </CreateAndSellWrapper>
        </SectionContainer>
    );
};