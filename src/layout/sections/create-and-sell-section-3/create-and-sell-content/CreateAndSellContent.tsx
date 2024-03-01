import {Title} from "@components/title";
import {Description} from "@components/description";
import {
    TextContentStyled
} from "@layout/sections/create-and-sell-section-3/create-and-sell-content/CreateAndSellContent.styled.ts";
import {ButtonBlock} from "@components/buttonBlock/ButtonBlock.tsx";
import {useResponsiveSize} from "@/hook";

export const CreateAndSellContent = () => {
    const isTablet = useResponsiveSize(990)

    return (
        <TextContentStyled>
            <Title title={<div>Create And Sell Your <span>Best NFTs</span></div>}/>
            <Description
                description='Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!'
                width='426px'/>
            <ButtonBlock buttonName='Create Now' width='176px' centered={isTablet}/>
        </TextContentStyled>
    )
}