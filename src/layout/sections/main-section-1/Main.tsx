import {SectionContainer} from "@components/section-container";
import {MainContent} from "@layout/sections/main-section-1/main-content";
import {PhotoContent} from "@layout/sections/main-section-1/main-photo-content";
import {MainData} from "@layout/sections/main-section-1/main-data";
import {MainWrap} from "@layout/sections/main-section-1/Main.styled.ts";
import {useResponsiveSize} from "@/hook";
import {StatsLine} from "@layout/sections/main-section-1/main-stats/Stats-line";

export const Main = () => {
    const isHide = useResponsiveSize(1410)

    return (
        <SectionContainer id='home'>
            <MainWrap>
                <MainContent mainData={MainData} isHide={isHide}/>
                <PhotoContent mainData={MainData}/>

                {isHide &&
                    <StatsLine mainData={MainData}/>}
            </MainWrap>
        </SectionContainer>
    )
}



