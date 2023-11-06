import React from 'react';
import styled from "styled-components";
import {themes} from "../../../style/themes";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/title/Title";
import {PContent} from "../../../components/text-content/PContent";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {Photo} from "../../../components/photo/Photo";
import img from "../../../assets/images/section-3-1.webp"
import img1 from "../../../assets/images/section-3-2.webp"

export const CreateAndSell = () => {

    const title = 'Create And Sell Your '

    return (
        <StyledCreateAndSell>
            <FlexWrapper justify='space-between' align='center'>
                <TextContent>
                    <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                        <Title title={title} primary={['Best NFTs']} mainTitle={false}/>
                        <PContent
                            text={`Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"} align='center' gap={'36px'}>
                        <ButtonPrimary buttonName={'Create Now'} width='176px'/>
                        <a>Learn More</a>
                    </FlexWrapper>
                </TextContent>

                <PhotoGroup>
                    <FirstPhoto>
                        <Photo img={img} width='410px' height='400px'/>
                    </FirstPhoto>
                    <SecondPhoto>
                        <Photo img={img1} width='410px' height='475px'/>
                    </SecondPhoto>
                </PhotoGroup>
            </FlexWrapper>
        </StyledCreateAndSell>
    );
};

const StyledCreateAndSell = styled.section`
  background-color: ${themes.backgroundColor};
  padding: ${themes.padding};
`

const TextContent = styled.div`
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