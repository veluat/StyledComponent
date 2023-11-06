import React from 'react';
import styled from "styled-components";
import {themes} from "../../../style/themes";
import {Title} from "../../../components/title/Title";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ImagesContainer} from "../../../components/ImagesContainer/ImagesContainer";
import img1 from "../../../assets/images/section-4-1.webp"
import img2 from "../../../assets/images/section-4-2.webp"
import img3 from "../../../assets/images/section-4-3.webp"
import img4 from "../../../assets/images/section-4-4.webp"
import img5 from "../../../assets/images/section-4-5.webp"

export const PopularArtists = () => {

    const title = 'Popular '
    const title2 = 'On This Week'
    const primary = ['', `Artists `]
    return (
        <StyledPopularArtists>
            <FlexWrapper justify='space-around' align='flex-end' gap='786px'>
                <Title title={title} title2={title2} primary={primary}/>
                <ButtonPrimary buttonName={'See All'} width='134px'/>
            </FlexWrapper>

            <ImagesContent>
                <FlexWrapper justify='center' gap='30px'>
                    <FlexWrapper direction='column' gap='30px'>
                        <FlexWrapper gap='30px'>
                            <ImagesContainer width='300px' height='311px' bg={img1}/>
                            <ImagesContainer width='520px' height='311px' bg={img2} position='top'/>
                        </FlexWrapper>
                        <FlexWrapper gap='30px'>
                            <ImagesContainer width='410px' height='311px' bg={img3} position='top'/>
                            <ImagesContainer width='410px' height='311px' bg={img4} position='top'/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ImagesContainer width='410px' height='652px' bg={img5} position='top'/>
                </FlexWrapper>
            </ImagesContent>
        </StyledPopularArtists>
    );
};

const StyledPopularArtists = styled.section`
  background-color: ${themes.backgroundColor};
  padding: ${themes.padding};
`

const ImagesContent = styled.div`
  margin-top: 64px;
`