import React from 'react';
import styled from "styled-components";
import img from "@assets/images/subscribe/section-5-1.webp";
import img1 from "@assets/images/subscribe/section-5-2.webp";
import {FlexWrapper} from "../../../components/flex-wrapper";
import {Container} from "../../../components/container";
import {Photo} from "../../../components/photo";
import {Title} from "../../../components/title";
import {TextContent} from "../../../components/text-content";
import {PrimaryButton} from "../../../components/primary-button";
import {theme} from "../../../assets/style/Theme";


export const Subscribe = () => {
    const title = 'Subscribe And '
    const title2 = 'Every Week'
    const primary = ['', 'get our Updates ']
    return (
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <ImgBox>
                    <FirstPhoto>
                        <Photo img={img} width='410px' height='376px' radius='20px'/>
                    </FirstPhoto>
                    <SecondPhoto>
                        <Photo img={img1} width='282px' height='348px' radius='16px'/>
                    </SecondPhoto>
                </ImgBox>
                <ContentBox>
                    <FlexWrapper direction='column' justify='flex-start' align='flex-start'>
                        <Title title={title} primary={primary} title2={title2} mainTitle={false} width='520px'/>
                        <TextContent
                            text={`We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly`}
                            width='520px'/>
                    </FlexWrapper>
                    <FlexWrapper wrap='flex-wrap'>
                        <InputStyled type="text" placeholder='Enter your e-mail'/>
                        <PrimaryButton buttonName='Subscribe' width='160px'/>
                    </FlexWrapper>
                </ContentBox>
            </FlexWrapper>
        </Container>
    );
};

const ImgBox = styled.div`
  max-width: 630px;
  width: 100%;
  height: 458px;
  position: relative;
`

const FirstPhoto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: rotate(-12deg);
`

const SecondPhoto = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`

const ContentBox = styled.div`
  max-width: 520px;
  width: 100%;
  height: 288px;
`

const InputStyled = styled.input.attrs({title: 'text'})`
  width: 516px;
  min-height: 28px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.secondaryBg};
  padding: 16px 24px;
  background-color: ${theme.colors.secondaryBg};
`
