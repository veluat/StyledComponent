import React from 'react';
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {Icon} from "@components/icon";
import {ClearButton} from "@components/clear-button";
import {CardsItemStyled, StyledSpan} from "@layout/sections/art-of-week-section-2/cardsItem/CardsItem.styled.ts";

type CardsItemProps = {
    title: string
    backgroundImage: string
    widthButtonClear: string
    width: string
    height: string
    radius: string
}

export const CardsItem: React.FC<CardsItemProps> = ({
                                                        width,
                                                        height,
                                                        radius,
                                                        widthButtonClear,
                                                        title,
                                                        backgroundImage,
                                                    }) => {
    return (
        <CardsItemStyled>
            <FlexWrapper direction="column" gap='24px'>
                <Photo
                    img={backgroundImage}
                    maxWidth={width}
                    maxHeight={height}
                    radius={radius}
                />
                <FlexWrapper gap='16px' justify="space-between" wrap='nowrap'>
                    <h3>{title}</h3>
                    <FlexWrapper align='center' gap='4px'>
                        <Icon IconTitle='doubleArrow' />
                        <h5>490ETH</h5>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper gap='16px' justify="space-between" wrap='nowrap'>
                    <FlexWrapper direction='column' gap='4px'>
                        <StyledSpan>Ending In</StyledSpan>
                        <FlexWrapper gap='12px' align='flex-end'>
                            <Icon IconTitle='clock' />
                            <h5>03:24:56</h5>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ClearButton buttonName='Place A Bid' widthButtonClear={widthButtonClear} />
                </FlexWrapper>
            </FlexWrapper>
        </CardsItemStyled>
    )
}
