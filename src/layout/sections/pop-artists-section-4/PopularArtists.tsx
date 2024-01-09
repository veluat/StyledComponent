import React from 'react';
import styled from "styled-components";
import {PopImages} from "./pop-images";
import popData from "./pop-data/PopData";
import {PrimaryButton} from "../../../components/primary-button";
import {Container} from "../../../components/container";
import {FlexWrapper} from "../../../components/flex-wrapper";
import {Title} from "../../../components/title";

export const PopularArtists = () => {

    const title = 'Popular '
    const title2 = 'On This Week'
    const primary = ['', `Artists `]
    return (
        <Container id='popular'>
            <FlexWrapper justify='space-between' align='flex-end'>
                <Title title={title} title2={title2} primary={primary} width='407px'/>
                <PrimaryButton buttonName={'See All'}/>
            </FlexWrapper>

            <ImagesContent>
                <PopImages popData={popData}/>
            </ImagesContent>
        </Container>
    );
};

const ImagesContent = styled.div`
  margin-top: 64px;
`