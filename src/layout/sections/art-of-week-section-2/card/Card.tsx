import React from 'react';
import {CardDataType} from "@layout/sections/art-of-week-section-2/cardData";
import {CardItem} from "@layout/sections/art-of-week-section-2/cardItem";
import {StyledCard} from "@layout/sections/art-of-week-section-2/card/Card.styled.ts";

type CardProps = {
    width: string
    height: string
    radius: string
    marginBottom: string
    widthButtonClear: string
    cardData: CardDataType[]
}

export const Card: React.FC<CardProps> = ({
                                              width,
                                              height,
                                              radius,
                                              marginBottom,
                                              widthButtonClear,
                                              cardData,
                                          }) => {
    return (
        <StyledCard>
            {cardData.map(card => {
                return <CardItem key={card.id} {...card}
                                 width={width}
                                 height={height}
                                 radius={radius}
                                 marginBottom={marginBottom}
                                 widthButtonClear={widthButtonClear}
                />
            })}
        </StyledCard>
    );
};
