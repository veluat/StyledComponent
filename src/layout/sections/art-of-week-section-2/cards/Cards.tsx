import React from 'react';
import {CardDataType} from "@layout/sections/art-of-week-section-2/card-data";
import {CardItem} from "@layout/sections/art-of-week-section-2/cards/cards-item";
import {S} from "@layout/sections/art-of-week-section-2/cards/Cards.styled.ts";

export const Cards: React.FC<CardsProps> = ({
                                                cardData, height, width, radius
                                            }) => {
    return (
        <S.StyledCard>
            {cardData.map(card => {
                return <CardItem key={card.id} {...card}
                                 width={width}
                                 height={height}
                                 radius={radius}
                />
            })}
        </S.StyledCard>
    )
}

type CardsProps = {
    cardData: CardDataType[]
    width: string
    height: string
    radius: string
    id?: number
}
