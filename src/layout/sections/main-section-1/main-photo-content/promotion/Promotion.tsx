import React from 'react';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {Span} from "../../../../../components/span/Span";
import {ButtonClear} from "../../../../../components/button-clear/Button-clear";
import styled from "styled-components";

export const Promotion = () => {
    return (
        <PromotionStyled>
            <FlexWrapper direction="column" justify="space-between" align="flex-end" gap='24px'
                         wrap="wrap" style={{width: '100%'}}>
                <FlexWrapper direction='row' justify="space-between" align="center" gap='36px'
                             style={{width: '100%'}}>
                    <FlexWrapper direction="column" gap='8px' justify="flex-start" align="flex-start">
                        <Span spanText='Ends in' color='#D3F85A'/>
                        <Span spanText='05:45:47' fontSize='700' lineHeight='20px'/>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap='8px' justify="flex-end" align="flex-end"
                                 wrap="wrap">
                        <Span spanText='Current bid' color='#D3F85A'/>
                        <Span spanText='0.24ETH' fontSize='700' lineHeight='20px'/>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justify={"center"} align={"center"} wrap="wrap" style={{width: '100%'}}>
                    <ButtonClear buttonName={'Place A Bid'}/>
                </FlexWrapper>
            </FlexWrapper>
        </PromotionStyled>
    );
}

const PromotionStyled = styled.div`
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
