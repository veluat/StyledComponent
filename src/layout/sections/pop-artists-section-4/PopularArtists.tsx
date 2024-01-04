import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/title/Title";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ImagesContainer} from "../../../components/ImagesContainer/ImagesContainer";
import img1 from "../../../assets/images/section-4-1.webp"
import img2 from "../../../assets/images/section-4-2.webp"
import img3 from "../../../assets/images/section-4-3.webp"
import img4 from "../../../assets/images/section-4-4.webp"
import img5 from "../../../assets/images/section-4-5.webp"
import {Container} from "../../../components/Container";

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
                <FlexWrapper justify='center' gap='30px'>
                    <FlexWrapper direction='column' gap='30px'>
                        <FlexWrapper gap='30px'>
                            <ImagesContainer width='300px' height='311px' bg={img1}/>
                            <ImagesContainer width='520px' height='311px' bg={img2}/>
                        </FlexWrapper>
                        <FlexWrapper gap='30px'>
                            <ImagesContainer width='410px' height='311px' bg={img3}/>
                            <ImagesContainer width='410px' height='311px' bg={img4}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ImagesContainer width='410px' height='652px' bg={img5}/>
                </FlexWrapper>
            </ImagesContent>
        </Container>
    );
};

const ImagesContent = styled.div`
  margin-top: 64px;
`