import {FlexWrapper} from "@components/flex-wrapper";
import {S} from "@layout/sections/main-section-1/main-stats/Stats-item/StatsItem.styled.ts";

export const StatsItem = (props: FrameProps) => {
    const {stats, title, ...rest} = props
    return (
        <S.StatsItemWrap {...rest}>
            <FlexWrapper direction='column' gap='16px'>
                <h2>
                    <span>{stats}</span>K
                </h2>
                <p>{title}</p>
            </FlexWrapper>
        </S.StatsItemWrap>
    )
}

type FrameProps = {
    stats: string
    title: string
    isLastItem: boolean
    isFirstItem: boolean
    isMobile: boolean
}