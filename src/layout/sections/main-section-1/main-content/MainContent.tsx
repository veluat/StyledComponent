import React from "react";
import {Title} from "@components/title";
import {Description} from "@components/description";
import {S} from "@layout/sections/main-section-1/main-content/MainContent.styled.ts";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {StatsLine} from "@layout/sections/main-section-1/main-stats/Stats-line";
import {ButtonBlock} from "@components/buttonBlock/ButtonBlock.tsx";
import {useResponsiveSize} from "@/hook";

export const MainContent: React.FC<MainContentPropsType> = ({mainData, isHide}) => {
    const isTablet = useResponsiveSize(990)

    return (
        <S.MainContentStyled>
            <Title mainTitle
                   title={<div>Discover and Collect The Best NFTs <span>Digital Art.</span></div>}/>
            <Description
                description="Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!"
                width='520px'/>
            <ButtonBlock buttonName='Explore Now' width='178px' centered={isTablet}/>
            {!isHide && <StatsLine mainData={mainData}/>}
        </S.MainContentStyled>
    )
}

type MainContentPropsType = {
    mainData: MainType
    isHide: boolean
}