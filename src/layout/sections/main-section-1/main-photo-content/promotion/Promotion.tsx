import {FlexWrapper} from "@components/flex-wrapper";
import {Span} from "@components/span";
import {ClearButton} from "@components/clear-button";
import React from "react";
import {StyledPromotion} from "@layout/sections/main-section-1/main-photo-content/promotion/Promotion.styled.ts";

type PromotionPropsType = {
    price: string
    endingTime: string
}

export const Promotion: React.FC<PromotionPropsType> = ({price, endingTime}) => {
    return (
        <StyledPromotion>
            <FlexWrapper direction="column" justify="space-between" align="flex-end" gap='24px'
                         wrap="wrap" style={{width: '100%'}}>
                <FlexWrapper direction='row' justify="space-between" align="center" gap='36px'
                             style={{width: '100%'}}>
                    <FlexWrapper direction="column" gap='8px' justify="flex-start" align="flex-start">
                        <Span spanText='Ends in' color='#D3F85A'/>
                        <Span spanText={endingTime} fontSize='700' lineHeight='20px'/>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap='8px' justify="flex-end" align="flex-end"
                                 wrap="wrap">
                        <Span spanText='Current bid' color='#D3F85A'/>
                        <Span spanText={price} fontSize='700' lineHeight='20px'/>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justify={"center"} align={"center"} wrap="wrap" style={{width: '100%'}}>
                    <ClearButton buttonName={'Place A Bid'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledPromotion>
    );
}
