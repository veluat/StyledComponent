import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {TextContent} from "@components/text-content/TextContent";
import {PrimaryButton} from "@components/primary-button/Primary-button";
import {Photo} from "@components/photo";
import img from "@assets/images/create-and-sell/section-3-1.webp"
import img1 from "@assets/images/create-and-sell/section-3-2.webp"
import {Container} from "@components/container/Container";

export const CreateAndSell = () => {

    const title = 'Create And Sell Your '
    const primary = ['', 'Best NFTs']

    return (
        <Container id='best'>
            <FlexWrapper justify='space-between' align='center'>
                <TextContentStyled>
                    <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                        <Title title={title} primary={primary} mainTitle={false}/>
                        <TextContent
                            text={`Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}
                            width='426px'/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"} align='center' gap={'36px'}>
                        <PrimaryButton buttonName={'Create Now'} width='176px'/>
                        <a>Learn More</a>
                    </FlexWrapper>
                </TextContentStyled>

                <PhotoGroup>
                    <FirstPhoto>
                        <Photo img={img} width='410px' height='400px'/>
                    </FirstPhoto>
                    <SecondPhoto>
                        <Photo img={img1} width='410px' height='475px'/>
                    </SecondPhoto>
                </PhotoGroup>
            </FlexWrapper>
        </Container>
    );
};

const TextContentStyled = styled.div`
  width: 426px;
  height: 280px;
`

const PhotoGroup = styled.div`
  width: 740px;
  height: 559px;
  position: relative;
`

const FirstPhoto = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const SecondPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;