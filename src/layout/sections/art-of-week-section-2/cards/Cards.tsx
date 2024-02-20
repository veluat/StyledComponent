import React from 'react';
import {CardDataType} from "@layout/sections/art-of-week-section-2/cardData";
import {CardsItem} from "@layout/sections/art-of-week-section-2/cardsItem";
import {StyledCard} from "@layout/sections/art-of-week-section-2/cards/Cards.styled.ts";
import {FlexWrapper} from "@components/flex-wrapper";
import {useResponsiveSize} from "@/hook";
import {theme} from "@assets/style/Theme.ts";

type CardsProps = {
    cardData: CardDataType[]
    width: string
    height: string
    radius: string
    widthButtonClear: string
}

export const Cards: React.FC<CardsProps> = ({
                                                cardData, height, width, radius, widthButtonClear
                                            }) => {
    const isColumn = useResponsiveSize(1128)
    const isMobile = useResponsiveSize(theme.media.mobile)
    return (
        <StyledCard>
            <FlexWrapper
                justify={isColumn ? 'space-between' : 'center'}
                align={isColumn ? 'center' : 'stretch'}
                direction={isColumn ? 'column' : 'row'}
                gap={isMobile ? '16px' : '30px'}>

            {cardData.map(card => {
                return <CardsItem key={card.id} {...card}
                                  width={width}
                                  height={height}
                                  radius={radius}
                                  widthButtonClear={widthButtonClear}
                />
            })}
            </FlexWrapper>
        </StyledCard>
    );
};
