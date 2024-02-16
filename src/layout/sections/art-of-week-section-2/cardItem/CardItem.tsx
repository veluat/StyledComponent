import React from 'react';
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {Icon} from "@components/icon";
import {ClearButton} from "@components/clear-button";
import {
    CardItemStyled,
    StyledH4,
    StyledH5,
    StyledSpan
} from "@layout/sections/art-of-week-section-2/cardItem/CardItem.styled.ts";

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
                       maxWidth={width}
                       maxHeight={height}
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
