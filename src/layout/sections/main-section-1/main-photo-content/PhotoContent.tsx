import React from "react";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {CircleContent} from "@layout/sections/main-section-1/main-photo-content/circle-content";
import {Promotion} from "@layout/sections/main-section-1/main-photo-content/promotion";
import {PhotoContentStyled} from "@layout/sections/main-section-1/main-photo-content/PhotoContent.styled.ts";
import {useResponsiveSize} from "@/hook";
import {theme} from "@assets/style/Theme.ts";

type PhotoContentPropsType = {
    mainData: MainType
}
export const PhotoContent: React.FC<PhotoContentPropsType> = ({mainData}) => {
    const isMobile = useResponsiveSize(theme.media.mobile)
    return (
        <PhotoContentStyled>
            <FlexWrapper wrap="wrap">
                <Photo img={mainData.backgroundImage}
                       maxWidth={isMobile ? '294px' : '464px'}
                       maxHeight={isMobile ? '344px' : '544px'}
                       radius={isMobile ? '16px' : '24px'}/>
                <CircleContent/>
                <Promotion price={mainData.price} endingTime={mainData.endingTime}/>
            </FlexWrapper>

        </PhotoContentStyled>
    )
}
