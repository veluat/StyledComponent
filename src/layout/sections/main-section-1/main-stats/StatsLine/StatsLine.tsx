import React from 'react';
import {MainType} from "../../main-data";
import {StatsItem} from "../StatsItem";
import styled from "styled-components";
import {useResponsiveSize} from "../../../../../hook";
import {FlexWrapper} from "../../../../../components/flex-wrapper";

type StatsLinPropsType = {
    mainData: MainType
}

export const StatsLine: React.FC<StatsLinPropsType> = ({mainData}) => {
    const isMobile = useResponsiveSize(576)
    return (
        <Wrapper>
            <FlexWrapper gap={isMobile ? '56px' : '94px'}>
                {mainData.statistics.map(el => {
                    return <StatsItem key={el.id} title={'K'} primary={[(el.value).toString()]} spanText={el.title}/>
                })}
            </FlexWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 509px;
  margin-top: 72px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    width: 88px;
    height: 58px;
  }
`