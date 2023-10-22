import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import section1 from '../../../assets/images/section-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/title/Title";
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {ButtonClear} from "../../../components/button-clear/Button-clear";
import {PContent} from "../../../components/text-content/PContent"
import {Span} from "../../../components/span/Span";

export const MainSection1 = () => {
    const title = 'Discover and Collect The Best NFTs'
    const primary = ['Digital Art.', '8.9', '65', '87']

    return (
        <MainContainer>
            <FlexWrapper justify={"space-between"} align={"flex-start"}>
                <TextContent>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"center"}>
                        <Title title={title} primary={['Digital Art.']} mainTitle={true}/>
                        <PContent text={`Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"}>
                        <ButtonPrimary buttonName={'Explore Now'}/>
                        <a>Learn More</a>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['8.9']}/>
                            <Span spanText={'Art work'}/>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['65']}/>                            <Span spanText={'Artist'}/>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <Title title={'K'} primary={['87']}/>                            <Span spanText={'Collection'}/>
                        </FlexWrapper>
                    </FlexWrapper>
                </TextContent>

                <PhotoContent>
                    <FlexWrapper direction={"column"}>
                        <Photo src={section1}></Photo>

                        <Star>
                            <Icon iconId="star" width="18" height="18" viewBox="0 0 35 35"/>

                        </Star>
                        <Group>
                            <Icon iconId="group" width="86" height="86" viewBox="0 0 172 172"/>
                        </Group>

                    </FlexWrapper>
                    <TextFrame>
                        <FlexWrapper direction={"column"} justify={"flex-start"} align={"flex-end"} gap={'12px'}>
                            <FlexWrapper direction={'row'} justify={"space-between"} align={"center"} gap={'auto'}>
                                <FlexWrapper direction={"column"} gap={'4px'}>
                                    <Span spanText={'Ends in'} color={'primary'}/>
                                    <Span spanText={'05:45:47'} fontSize={'600'} lineHeight={'10px'}/>
                                </FlexWrapper>
                                <FlexWrapper direction={"column"}>
                                    <Span spanText={'Current bid'} color={'primary'}/>
                                    <Span spanText={'0.24ETH'} fontSize={'600'} lineHeight={'10px'}/>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper justify={"center"} align={"center"}>
                                <ButtonClear buttonName={'Place A Bid'}/>
                            </FlexWrapper>
                        </FlexWrapper>
                    </TextFrame>
                </PhotoContent>
            </FlexWrapper>
        </MainContainer>
    )
}

const MainContainer = styled.section`
  min-height: 100vh;
  background-color: #090F1D;
  padding: 46px 56px;
`

const Photo = styled.img`
  width: 232px;
  height: 272px;
  object-fit: cover;
  border-radius: 12px;
  position: relative;
`

const TextContent = styled.div`
  width: 272px;
`
const PhotoContent = styled.div`
  width: 272px;
`
const Star = styled.div`
  position: absolute;
  top: 220px;
  padding-left: 5px;
`

const Group = styled.div`
  position: absolute;
  top: 186px;
  right: 274px;
`

const TextFrame = styled.div`
  width: 132px;
  height: 80px;
  border-radius: 8px;
  border-top: 0.5px solid #D3F85A;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: flex-end;
  background-color: #131E3A;
`