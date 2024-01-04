import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Photo} from "../photo/Photo";
import {Icon} from "../icon/Icon";
import {ButtonClear} from "../button-clear/Button-clear";
import {theme} from "../../style/Theme";

type CardProps = {
    img: string
    width: string
    height: string
    radius?: string
    marginBottom?: string
    widthButtonClear?: string
}

export const Card = (props: CardProps) => {
    const {img, width, height, radius, marginBottom, widthButtonClear} = props
    return (
        <StyledCard>
            <Photo img={img} width={width} height={height} radius={radius} marginBottom={marginBottom}/>
            <FlexWrapper direction={'column'} gap='16px'>
                <FlexWrapper justify='space-between' align='center'>
                    <StyledH4>Cyberpunk Cocomo</StyledH4>
                    <FlexWrapper align='center'>
                        <Icon IconTitle='doubleArrow'/>
                        <StyledH5>490ETH</StyledH5>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justify='space-between'>
                    <FlexWrapper direction={'column'} gap='4px'>
                        <StyledSpan>Ending In</StyledSpan>
                        <FlexWrapper gap='12px' align='flex-end'>
                            <Icon IconTitle='clock'/>
                            <StyledH5>03:24:56</StyledH5>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ButtonClear buttonName='Place A Bid' widthButtonClear={widthButtonClear}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  width: 410px;
  height: 498px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid #D3F85A;
  background-color: #131E3A;


  @media ${theme.media.mobile} {
    max-width: 343px;
  }
`

const StyledH5 = styled.h5`
font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`

const StyledH4 = styled.h4`
font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`

const StyledSpan = styled.span`
  color: ${theme.colors.fontGray};
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`