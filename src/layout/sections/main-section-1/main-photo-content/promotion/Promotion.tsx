import styled from "styled-components";
import {FlexWrapper} from "@components/flex-wrapper";
import {Span} from "@components/span";
import {ClearButton} from "@components/clear-button";
import React from "react";

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

const StyledPromotion = styled.div`
  width: 304px;
  max-height: 169px;
  border-radius: 16px;
  border-top: 1px solid #D3F85A;
  padding: 20px;
  background-color: #131E3A;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 0 9px 50px rgba(23, 36, 65, 0.04);
`
