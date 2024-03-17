import img1 from "@assets/images/section-subscribe-5/section-5-1.webp";
import img2 from "@assets/images/section-subscribe-5/section-5-2.webp";
import {
    FirstPhoto, Img,
    ImgBox,
    SecondPhoto
} from "@layout/sections/subscribe-section-5/subscribe-photos/SubscribePhotos.styled.ts";

export const SubscribePhotos = () => {
    return (
        <ImgBox>
            <FirstPhoto>
                <Img src={img1} alt="SubscribeImg-1" position='left 2px top -42px'/>
            </FirstPhoto>
            <SecondPhoto>
                <Img src={img2} alt="SubscribeImg-2" position='top -2px'/>
            </SecondPhoto>
        </ImgBox>
    )
}