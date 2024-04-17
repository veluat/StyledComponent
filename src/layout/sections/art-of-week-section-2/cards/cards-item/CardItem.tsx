import React from 'react';
import {FlexWrapper} from "@components/flex-wrapper";
import {Photo} from "@components/photo";
import {Icon} from "@components/icon";
import {S} from "@layout/sections/art-of-week-section-2/cards/cards-item/CardItem.styled.ts";
import {Button} from "@components/button/Button.tsx";
import {useResponsiveSize} from "@/hook";
import {CardDataType} from "@layout/sections/art-of-week-section-2/card-data";
import {
    StatusCardBlock
} from "@layout/sections/art-of-week-section-2/cards/cards-item/cards-status-block/StatusCardBlockProps.tsx";

export const CardItem: React.FC<CardsItemProps & CardDataType> = ({
                                                                      width,
                                                                      height,
                                                                      radius,
                                                                      title,
                                                                      price,
                                                                      currency,
                                                                      endingTime,
                                                                      backgroundImage,
                                                                      id
                                                                  }) => {
    const isMobile = useResponsiveSize(576)
    const isPoint = useResponsiveSize(620)

    return (
        <S.CardItemStyled>
            <FlexWrapper direction="column" gap='24px'>
                <S.CardImage>
                    <Photo
                        img={backgroundImage}
                        maxWidth={width}
                        maxHeight={id === 1 && isPoint ? '311px' : height}
                        radius={radius}
                    />
                </S.CardImage>

                <S.CardTitle>
                    <FlexWrapper justify="space-between">
                        <h3>{title}</h3>
                        <S.CardPrice>
                            <FlexWrapper align='center' gap='4px'>
                                <Icon IconTitle='doubleArrow'/>
                                <h5>{price}{currency}</h5>
                            </FlexWrapper>
                        </S.CardPrice>
                    </FlexWrapper>
                </S.CardTitle>

                <S.CardFullness>
                    <FlexWrapper justify="space-between">
                        <StatusCardBlock title='Ending In' endingTime={endingTime}/>
                        <Button btnType='outlined'
                                buttonName='Place A Bid'
                                width={isMobile ? '168px' : '178px'}/>
                    </FlexWrapper>
                </S.CardFullness>
            </FlexWrapper>
        </S.CardItemStyled>
    )
}

type CardsItemProps = {
    width: string
    height: string
    radius: string
    id: number
}
