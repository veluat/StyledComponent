import React from 'react';
import styled from "styled-components";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button/Primary-button";
import {FlexWrapper} from "@components/flex-wrapper";

import {Container} from "@components/container/Container";
import {PopImages} from "./pop-images/PopImages";
import popData from "./pop-data/PopData";

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