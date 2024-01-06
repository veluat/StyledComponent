import React from 'react';
import styled from "styled-components";
import {Container} from "@components/container/Container";
import {StatsLine} from "./main-stats/StatsLine/StatsLine";
import {MainData} from './main-data/MainData'
import {PhotoContent} from "./main-photo-content/PhotoContent";
import {MainContent} from "./main-content/MainContent";

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


