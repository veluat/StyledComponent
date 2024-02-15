import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {TextContent} from "@components/text-content";
import {PrimaryButton} from "@components/primary-button";
import {
    TextContentStyled
} from "@layout/sections/create-and-sell-section-3/createAndSellContent/CreateAndSellContent.styled.ts";

export const CreateAndSellContent = () => {
    const title = 'Create And Sell Your '
    const primary = ['', 'Best NFTs']
    return (
        <TextContentStyled>
            <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                <Title title={title} primary={primary}/>
                <TextContent
                    text='Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!'
                    width='426px'/>
            </FlexWrapper>
            <FlexWrapper justify="flex-start" align='center' gap='36px'>
                <PrimaryButton buttonName='Create Now' width='176px'/>
                <a>Learn More</a>
            </FlexWrapper>
        </TextContentStyled>
    );
}