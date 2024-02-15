import {Container} from "@components/container";
import {CreateAndSellContent} from "@layout/sections/create-and-sell-section-3/createAndSellContent";
import {CreateAndSellPhoto} from "@layout/sections/create-and-sell-section-3/createAndSellPhoto/CreateAndSellPhoto.tsx";
import {CreateAndSellWrapper} from "@layout/sections/create-and-sell-section-3/CreateAndSellWrapper.styled.ts";

export const CreateAndSell = () => {
    return (
        <Container id='best'>
            <CreateAndSellWrapper>
                <CreateAndSellContent/>
                <CreateAndSellPhoto/>
            </CreateAndSellWrapper>
        </Container>
    );
};