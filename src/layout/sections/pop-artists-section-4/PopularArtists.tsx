import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {Container} from "../../../components/Container";
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
                <ButtonPrimary buttonName={'See All'}/>
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