import React from "react";
import {MainType} from "@layout/sections/main-section-1/main-data";
import {useResponsiveSize} from "@/hook";
import {StatsItem} from "@layout/sections/main-section-1/main-stats/Stats-item";
import {StatsLineWrap} from "@layout/sections/main-section-1/main-stats/Stats-line/StatsLine.styled.ts";

export const StatsLine: React.FC<StatsLinePropsType> = ({mainData}) => {
    const isMobile = useResponsiveSize(576)
    let gap = isMobile ? '0' : '94px'

    return (
        <StatsLineWrap gap={gap}>
            {mainData.statistics.map((el, index) => {
                const isLastItem = index === mainData.statistics.length - 1;
                const isFirstItem = index === 0;
                return <StatsItem isFirstItem={isFirstItem} isLastItem={isLastItem} key={el.id}
                                  stats={`${el.value}`}
                                  title={el.title}
                                  isMobile={isMobile}/>
            })}
        </StatsLineWrap>
    )
}

type StatsLinePropsType = {
    mainData: MainType
}

