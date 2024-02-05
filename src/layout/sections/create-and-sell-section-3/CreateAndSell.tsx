import img from "@assets/images/create-and-sell/section-3-1.webp"
import img1 from "@assets/images/create-and-sell/section-3-2.webp"
import {Photo} from "@components/photo";
import {FlexWrapper} from "@components/flex-wrapper";
import {TextContent} from "@components/text-content";
import {Container} from "@components/container";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button";
import {
    CreateAndSellWrapper,
    FirstPhoto,
    PhotoGroup,
    SecondPhoto,
    TextContentStyled
} from "@layout/sections/create-and-sell-section-3/CreateAndSell.styled.ts";
import {useResponsiveSize} from "@/hook";
import {theme} from "@assets/style/Theme.ts";

export const CreateAndSell = () => {

    const title = 'Create And Sell Your '
    const primary = ['', 'Best NFTs']
    const isMobile = useResponsiveSize(theme.media.mobile)

    return (
        <Container id='best'>
            <CreateAndSellWrapper>
                <TextContentStyled>
                    <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                        <Title title={title} primary={primary}/>
                        <TextContent
                            text={`Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}
                            width='426px'/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"} align='center' gap={'36px'}>
                        <PrimaryButton buttonName={'Create Now'} width='176px'/>
                        <a>Learn More</a>
                    </FlexWrapper>
                </TextContentStyled>

                <PhotoGroup isMobile={isMobile}>
                    <FirstPhoto>
                        <Photo img={img} width='410px' height='400px'/>
                    </FirstPhoto>
                    <SecondPhoto>
                        <Photo img={img1} width='410px' height='475px'/>
                    </SecondPhoto>
                </PhotoGroup>
            </CreateAndSellWrapper>
        </Container>
    );
};
