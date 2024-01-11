import React from 'react';
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {Icon} from "@components/icon";
import {ClearButton} from "@components/clear-button";
import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

type CardItemProps = {
    title: string
    backgroundImage: string
    widthButtonClear: string
    width: string
    height: string
    radius: string
    marginBottom: string
}

export const CardItem: React.FC<CardItemProps> = ({
                                                      width,
                                                      height,
                                                      radius,
                                                      marginBottom,
                                                      widthButtonClear,
                                                      title,
                                                      backgroundImage,
                                                  }) => {
    return (
        <CardItemStyled>
            <FlexWrapper direction="column" gap="24px">
                <Photo img={backgroundImage}
                       width={width}
                       height={height}
                       radius={radius}
                       marginBottom={marginBottom}/>

                <FlexWrapper direction="column" gap="16px">
                    <FlexWrapper justify="space-between" align="center">
                        <StyledH4>{title}</StyledH4>
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
                        <ClearButton buttonName='Place A Bid' widthButtonClear={widthButtonClear}/>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </CardItemStyled>
    );
};

const CardItemStyled = styled.div`
  width: 100%;
  max-width: 410px;
  min-height: 498px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.secondaryBg};


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
