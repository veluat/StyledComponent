import React from 'react';
import styled from "styled-components";
import {StatsLine} from "./main-stats/StatsLine";
import {MainData} from './main-data'
import {PhotoContent} from "./main-photo-content";
import {MainContent} from "./main-content";
import {Container} from "../../../components/container";

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


