import React from "react";
import {
    PromotionStatusWrap
} from "@layout/sections/main-section-1/main-photo-content/promotion/promotion-status/PromotionStatus.styled.ts";
import {Span} from "@components/span";
import {FlexWrapper} from "@components/flex-wrapper";
import {theme} from "@assets/style/Theme.ts";

export const PromotionStatus: React.FC<PromotionStatusPropsType> = ({title, value}) => {
    return (
        <PromotionStatusWrap>
            <Span spanValue={title} color={theme.colors.primary}/>
            <FlexWrapper align='center' gap='12px'>
                <h5>{value}</h5>
            </FlexWrapper>
        </PromotionStatusWrap>
    )
}

type PromotionStatusPropsType = {
    title: string
    value: string
}