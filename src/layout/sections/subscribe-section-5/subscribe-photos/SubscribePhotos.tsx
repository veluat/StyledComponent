import img1 from "@assets/images/section-subscribe-5/section-5-1.webp";
import img2 from "@assets/images/section-subscribe-5/section-5-2.webp";
import {S} from "@layout/sections/subscribe-section-5/subscribe-photos/SubscribePhotos.styled.ts";

export const SubscribePhotos = () => {
    return (
        <S.ImgBox>
            <S.FirstPhoto>
                <S.Img src={img1} alt="SubscribeImg-1"/>
            </S.FirstPhoto>
            <S.SecondPhoto>
                <S.Img src={img2} alt="SubscribeImg-2"/>
            </S.SecondPhoto>
        </S.ImgBox>
    )
}