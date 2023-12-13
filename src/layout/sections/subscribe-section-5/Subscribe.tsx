import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/title/Title";
import {PContent} from "../../../components/text-content/PContent";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {Photo} from "../../../components/photo/Photo";
import img from "../../../assets/images/section-5-1.webp";
import img1 from "../../../assets/images/section-5-2.webp";
import {Container} from "../../../components/Container";
import {theme} from "../../../style/Theme";

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
                        <PContent
                            text={`We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly`}
                            width='520px'/>
                    </FlexWrapper>
                    <FlexWrapper wrap='flex-wrap'>
                        <InputStyled type="text" placeholder='Enter your e-mail'/>
                        <ButtonPrimary buttonName='Subscribe' width='160px'/>
                    </FlexWrapper>
                </ContentBox>
            </FlexWrapper>
        </Container>
    );
};

const ImgBox = styled.div`
  width: 630px;
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
  width: 520px;
  height: 288px;
`

const InputStyled = styled.input.attrs({type: 'text'})`
  width: 516px;
  min-height: 28px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.secondaryBg};
  padding: 16px 24px;
  background-color: ${theme.colors.secondaryBg};
`
