import img from "@assets/images/subscribe/section-5-1.webp";
import img1 from "@assets/images/subscribe/section-5-2.webp";
import {Container} from "@components/container";
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {Title} from "@components/title";
import {TextContent} from "@components/text-content";
import {PrimaryButton} from "@components/primary-button";
import {
    ContentBox,
    FirstPhoto,
    ImgBox,
    InputStyled,
    SecondPhoto
} from "@layout/sections/subscribe-section-5/Subscribe.styled.ts";

export const Subscribe = () => {
    const title = 'Subscribe And '
    const title2 = 'Every Week'
    const primary = ['', 'get our Updates ']
    return (
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <ImgBox>
                    <FirstPhoto>
                        <Photo img={img} width='410px' height='376px' radius='20px'/>
                    </FirstPhoto>
                    <SecondPhoto>
                        <Photo img={img1} width='282px' height='348px' radius='16px'/>
                    </SecondPhoto>
                </ImgBox>
                <ContentBox>
                    <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                        <Title title={title} primary={primary} title2={title2} mainTitle={false} width='520px'/>
                        <TextContent
                            text={`We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly`}
                            width='520px'/>
                    </FlexWrapper>
                    <FlexWrapper wrap='flex-wrap'>
                        <InputStyled type="text" placeholder='Enter your e-mail'/>
                        <PrimaryButton buttonName='Subscribe' width='160px'/>
                    </FlexWrapper>
                </ContentBox>
            </FlexWrapper>
        </Container>
    );
};
