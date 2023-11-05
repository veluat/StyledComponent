import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Photo} from "../photo/Photo";
import img1 from '../../assets/images/section-2-1.webp'
import {Icon} from "../icon/Icon";
import {ButtonClear} from "../button-clear/Button-clear";

export const Card = () => {
    return (
        <StyledCard>
            <Photo img={img1} width='370px' height='340px' radius='16px'/>
            <FlexWrapper direction={'column'} gap='16px'>

                <FlexWrapper justify='space-between' align='baseline'>
                    <h4>Cyberpunk Cocomo</h4>
                    <h5><Icon iconId='doubleArrow'/>490ETH</h5>
                </FlexWrapper>
                <FlexWrapper justify='space-between'>
                    <FlexWrapper direction={'column'}>
                        <span>Ending In</span>
                        <FlexWrapper gap='12px'>
                            <Icon iconId='clock'/>
                            <h5>03:24:56</h5>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ButtonClear buttonName='Place A Bid'/>
                </FlexWrapper>
            </FlexWrapper>

        </StyledCard>
    );
};

const StyledCard = styled.div`
  width: 370px;
  height: 458px;
  padding: 20px;
  border-radius: 28px;
  border-top: 1px solid #D3F85A;
  background-color: #131E3A;
`