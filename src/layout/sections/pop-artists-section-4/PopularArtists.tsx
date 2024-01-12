import {Container} from "@components/container";
import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button";
import {PopImages} from "@layout/sections/pop-artists-section-4/pop-images";
import popData from "@layout/sections/pop-artists-section-4/pop-data/PopData.ts";
import styled from "styled-components";

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