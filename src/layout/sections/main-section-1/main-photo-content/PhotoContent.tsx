import React from 'react';
import {MainType} from "../main-data/MainData";
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import styled from "styled-components";
import {Promotion} from "./promotion/Promotion";
import {CircleContent} from "./circle-content/CircleContent";

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

