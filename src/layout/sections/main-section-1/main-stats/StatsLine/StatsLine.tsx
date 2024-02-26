import React from "react";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {useResponsiveSize} from "@/hook";
import {StatsItem} from "@layout/sections/main-section-1/main-stats/StatsItem";
import styled from "styled-components";

type StatsLinePropsType = {
    mainData: MainType
}

export const StatsLine: React.FC<StatsLinePropsType> = ({mainData}) => {
    const isMobile = useResponsiveSize(576)
    return (
        <Wrapper isMobile={isMobile}>
                {mainData.statistics.map((el, index) => {
                    const isLastItem = index === mainData.statistics.length - 1;
                    const isFirstItem = index === 0;
                    return <StatsItem isFirstItem={isFirstItem} isLastItem={isLastItem} key={el.id} title={'K'} primary={[(el.value).toString()]} spanText={el.title}/>
                })}
        </Wrapper>
    )
}

const Wrapper = styled.div<{isMobile: boolean}>`
  max-width: 544px;
  width: 100%;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.isMobile ? '30px' : '94px'};
`