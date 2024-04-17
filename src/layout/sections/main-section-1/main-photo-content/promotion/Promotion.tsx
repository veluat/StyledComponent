import React from "react";
import {S} from "@layout/sections/main-section-1/main-photo-content/promotion/Promotion.styled.ts";
import {useResponsiveSize} from "@/hook";
import {FlexWrapper} from "@components/flex-wrapper";
import {
    PromotionStatus
} from "@layout/sections/main-section-1/main-photo-content/promotion/promotion-status/PromotionStatus.tsx";
import {Button} from "@components/button/Button.tsx";

export const Promotion: React.FC<PromotionPropsType> = ({price, currency, endingTime}) => {
    const isTablet = useResponsiveSize(576)
    return (
        <S.PromotionWrap>
            <FlexWrapper gap={isTablet ? '16px' : '24px'}>
                <S.PromotionInfo>
                    <PromotionStatus title='Ends in' value={endingTime}/>
                    <PromotionStatus title='Current bid' value={`${price}${currency}`}/>
                </S.PromotionInfo>
                <FlexWrapper justify='center' align='center' style={{width: '100%'}}>
                    <Button btnType='outlined' buttonName='Place A Bid'/>
                </FlexWrapper>
            </FlexWrapper>
        </S.PromotionWrap>
    )
}

type PromotionPropsType = {
    price: number
    endingTime: string
    currency: string
}