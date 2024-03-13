import React from "react";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {Photo} from "@components/photo";
import {CircleContent} from "@layout/sections/main-section-1/main-photo-content/circle-content";
import {Promotion} from "@layout/sections/main-section-1/main-photo-content/promotion";
import {PhotoContentStyled} from "@layout/sections/main-section-1/main-photo-content/PhotoContent.styled.ts";
import {useResponsiveSize} from "@/hook";

export const PhotoContent: React.FC<PhotoContentPropsType> = ({mainData}) => {
    const isMobile = useResponsiveSize(576)
    return (
        <PhotoContentStyled>
            <Photo img={mainData.backgroundImage}
                   maxWidth={isMobile ? '294px' : '464px'}
                   maxHeight={isMobile ? '344px' : '544px'}
                   radius={isMobile ? '16px' : '24px'}
            />
            <CircleContent/>
            <Promotion price={mainData.price}
                       endingTime={mainData.endingTime}
                       currency={mainData.currency}
            />
        </PhotoContentStyled>
    )
}

type PhotoContentPropsType = {
    mainData: MainType
}