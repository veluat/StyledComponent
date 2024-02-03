import img from "@assets/images/subscribe/section-5-1.webp";
import img1 from "@assets/images/subscribe/section-5-2.webp";
import {
    FirstPhoto, Img,
    ImgBox,
    SecondPhoto
} from "@layout/sections/subscribe-section-5/subscribePhotos/SubscribePhotos.styled.ts";

export const SubscribePhotos = () => {
    return (
        <ImgBox>
            <FirstPhoto>
                <Img src={img} alt="SubscribeImg-1"/>
            </FirstPhoto>
            <SecondPhoto>
                <Img src={img1} alt="SubscribeImg-2"/>
            </SecondPhoto>
        </ImgBox>
    )
}