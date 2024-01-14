import {Container} from "@components/container";
import {MainContent} from "@layout/sections/main-section-1/main-content";
import {PhotoContent} from "@layout/sections/main-section-1/main-photo-content";
import {MainData} from "@layout/sections/main-section-1/main-data";
import {StatsLine} from "@layout/sections/main-section-1/main-stats/StatsLine";
import {MainBox} from "@layout/sections/main-section-1/MainSection.styled.ts";

export const MainSection = () => {
    return (
        <Container id='home'>
            <MainBox>
                <MainContent/>
                <PhotoContent mainData={MainData}/>
                <StatsLine mainData={MainData}/>
            </MainBox>
        </Container>
    )
}



