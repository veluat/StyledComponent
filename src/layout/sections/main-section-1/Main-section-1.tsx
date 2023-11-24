import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/title/Title";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {ButtonClear} from "../../../components/button-clear/Button-clear";
import {PContent} from "../../../components/text-content/PContent"
import {Span} from "../../../components/span/Span";
import {Photo} from "../../../components/photo/Photo";
import img from '../../../assets/images/section-1.webp';
import {theme} from '../../../style/Theme'
import {Container} from "../../../components/Container";

export const MainSection1 = () => {
    const title = 'Discover and Collect The Best NFTs'

    return (
        <Container>
            <FlexWrapper justify={"space-between"} align={"flex-start"} gap={"auto"}>
                <TextContent>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"flex-start"}>
                        <Title title={title} primary={[' Digital Art.']} mainTitle={true}/>
                        <PContent text={`Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"} align='center' gap={'36px'}>
                        <ButtonPrimary buttonName={'Explore Now'} width='178px'/>
                        <a>Learn More</a>
                    </FlexWrapper>
                    <Wrapper>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['8.9']}/>
                            <Span spanText={'Art work'}/>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['65']}/>
                            <Span spanText={'Artist'}/>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['87']}/>
                            <Span spanText={'Collection'}/>
                        </FlexWrapper>
                    </Wrapper>
                </TextContent>

                <PhotoContent>
                    <FlexWrapper>
                        <Photo img={img} width={'464px'} height={'544px'} radius={'24px'}/>
                        <Star>
                            <Icon iconId="star" width="35" height="35" viewBox="0 0 35 35"/>
                        </Star>
                        <Group>
                            <Icon iconId="group" width="172" height="172" viewBox="0 0 172 172"/>
                        </Group>
                    </FlexWrapper>
                    <TextFrame>
                        <FlexWrapper direction={"column"} justify={"space-between"} align={"flex-end"} gap={'24px'} style={{width: '100%'}}>
                            <FlexWrapper direction={'row'} justify={"space-between"} align={"center"} gap={'36px'} style={{width: '100%'}}>
                                <FlexWrapper direction={"column"} gap={'4px'} justify={"flex-start"} align={"flex-start"} >
                                    <Span spanText={'Ends in'} color={'#D3F85A'}/>
                                    <Span spanText={'05:45:47'} fontSize={'600'} lineHeight={'10px'}/>
                                </FlexWrapper>
                                <FlexWrapper direction={"column"} gap={'4px'} justify={"flex-end"} align={"flex-end"} >
                                    <Span spanText={'Current bid'} color={'primary'}/>
                                    <Span spanText={'0.24ETH'} fontSize={'600'} lineHeight={'10px'}/>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper justify={"center"} align={"center"}  style={{width: '100%'}}>
                                <ButtonClear buttonName={'Place A Bid'}/>
                            </FlexWrapper>
                        </FlexWrapper>
                    </TextFrame>
                </PhotoContent>
            </FlexWrapper>
        </Container>
    )
}

const TextContent = styled.div`
  width: 544px;
  height: 585px;
`
const PhotoContent = styled.div`
  width: 575px;
  height: 637px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 236px;
    bottom: 20px;
    width: 631px;
    height: 458px;
    background-image: radial-gradient(260px 260px, rgba(31, 65, 61, 1), rgba(31, 65, 61, 0));
  }

  &:after {
    content: '';
    position: absolute;
    right: -33px;
    bottom: -58px;
    width: 352px;
    height: 221px;
    background-image: radial-gradient(65% 55%, rgba(26, 38, 82, 1), rgba(26, 38, 82, 0));
  }
`
const Star = styled.div`
  position: absolute;
  top: 48%;
  padding-left: 5px;
`

const Group = styled.div`
  position: absolute;
  top: 37.3%;
  left: -60px;
`

const TextFrame = styled.div`
  width: 304px;
  max-height: 169px;
  border-radius: 16px;
  border-top: 1px solid #D3F85A;
  padding: 20px;
  background-color: #131E3A;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  box-shadow: 0 9px 50px rgba(23, 36, 65, 0.04);
`

const Wrapper = styled.div`
  width: 506px;
  margin-top: 72px;
  display: flex;
  gap: 94px;
  justify-content: flex-start;
  align-items: center;

  h2 {
    width: 88px;
    height: 58px;
  }
`