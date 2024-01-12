import React from "react";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {CircleContent} from "@layout/sections/main-section-1/main-photo-content/circle-content";
import {Promotion} from "@layout/sections/main-section-1/main-photo-content/promotion";
import {PhotoContentStyled} from "@layout/sections/main-section-1/PhotoContent.styled.ts";

type PhotoContentPropsType = {
    mainData: MainType
}
export const PhotoContent: React.FC<PhotoContentPropsType> = ({mainData}) => {
    return (
        <PhotoContentStyled>
            <FlexWrapper wrap="wrap">
                <Photo img={mainData.backgroundImage} width={'464px'} height={'544px'} radius={'24px'}/>
                <CircleContent/>
            </FlexWrapper>

            <Promotion price={mainData.price} endingTime={mainData.endingTime}/>
        </PhotoContentStyled>
    )
}
