import {Container} from "@components/container";
import {MainContent} from "@layout/sections/main-section-1/main-content";
import {PhotoContent} from "@layout/sections/main-section-1/main-photo-content";
import {MainData} from "@layout/sections/main-section-1/main-data";
import {StatsLine} from "@layout/sections/main-section-1/main-stats/StatsLine";
import styled from "styled-components";

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

const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`


