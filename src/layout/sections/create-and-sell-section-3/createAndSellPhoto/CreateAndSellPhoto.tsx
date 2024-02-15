import {Photo} from "@components/photo";
import img1 from "@assets/images/create-and-sell/section-3-1.webp";
import img2 from "@assets/images/create-and-sell/section-3-2.webp";
import {
    FirstPhoto,
    PhotoGroup,
    SecondPhoto
} from "@layout/sections/create-and-sell-section-3/createAndSellPhoto/CreateAndSellPhoto.styled.ts";

export const CreateAndSellPhoto = () => {
    return (
        <PhotoGroup>
            <FirstPhoto>
                <Photo img={img1}
                       maxWidth='410px'
                       maxHeight='400px'
                       radius="24px"
                       objectPosition='center top'
                       alt='CreateAndSellImg-1'/>
            </FirstPhoto>
            <SecondPhoto>
                <Photo img={img2}
                       maxWidth='410px'
                       maxHeight='475px'
                       radius="24px"
                       objectPosition='center'
                       alt='CreateAndSellImg-2'/>
            </SecondPhoto>
        </PhotoGroup>
    );
}