import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Photo} from "../photo/Photo";
import {Icon} from "../icon/Icon";
import {ButtonClear} from "../button-clear/Button-clear";

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
                    <h4 style={{fontSize: '24px', lineHeight: '29px', fontWeight: '700'}}>Cyberpunk Cocomo</h4>
                    <FlexWrapper align='center'>
                        <Icon iconId='doubleArrow'/>
                        <h5 style={{fontSize: '16px', lineHeight: '20px', fontWeight: '700'}}>490ETH</h5>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper justify='space-between'>
                    <FlexWrapper direction={'column'}>
                        <span>Ending In</span>
                        <FlexWrapper gap='12px' align='flex-end'>
                            <Icon iconId='clock'/>
                            <h5>03:24:56</h5>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ButtonClear buttonName='Place A Bid' widthButtonClear='168px'/>
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
`