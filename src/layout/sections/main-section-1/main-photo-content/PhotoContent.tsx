import React from "react";
import styled from "styled-components";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {CircleContent} from "@layout/sections/main-section-1/main-photo-content/circle-content";
import {Promotion} from "@layout/sections/main-section-1/main-photo-content/promotion";

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

const PhotoContentStyled = styled.div`
  max-width: 575px;
  height: 637px;
  position: relative;
  flex-grow: 1;

  &:before {
    content: '';
    position: absolute;
    right: 236px;
    bottom: 20px;
    width: 631px;
    height: 458px;
    background-image: radial-gradient(260px 260px, rgba(31, 65, 61, 1), rgba(31, 65, 61, 0));
  }

  &:after {
    content: '';
    position: absolute;
    right: -33px;
    bottom: -58px;
    width: 352px;
    height: 221px;
    background-image: radial-gradient(65% 55%, rgba(26, 38, 82, 1), rgba(26, 38, 82, 0));
  }
`

