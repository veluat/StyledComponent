import {Photo} from "@components/photo";
import img1 from "@assets/images/section-create-and-sell-3/section-3-1.webp";
import img2 from "@assets/images/section-create-and-sell-3/section-3-2.webp";
import {S} from "@layout/sections/create-and-sell-section-3/create-and-sell-photo/CreateAndSellPhoto.styled.ts";

export const CreateAndSellPhoto = () => {
    return (
        <S.PhotoGroup>
            <S.FirstPhoto>
                <Photo img={img1}
                       maxWidth='410px'
                       maxHeight='400px'
                       radius='24px'
                       objectPosition='center top'
                       alt='CreateAndSellImg-1'/>
            </S.FirstPhoto>
            <S.SecondPhoto>
                <Photo img={img2}
                       maxWidth='410px'
                       maxHeight='475px'
                       radius='24px'
                       objectPosition='center'
                       alt='CreateAndSellImg-2'/>
            </S.SecondPhoto>
        </S.PhotoGroup>
    )
}