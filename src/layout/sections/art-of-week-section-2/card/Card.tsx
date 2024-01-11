import React from 'react';
import styled from "styled-components";
import {CardDataType} from "@layout/sections/art-of-week-section-2/cardData";
import {CardItem} from "@layout/sections/art-of-week-section-2/cardItem";

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

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  flex-basis: 343px;

  width: 100%;
  flex-wrap: nowrap;
  flex-grow: 1;

  @media screen and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
  }
`
