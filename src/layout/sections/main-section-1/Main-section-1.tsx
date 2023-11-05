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
import img from '../../../assets/images/section-1.webp'

export const MainSection1 = () => {
    const title = 'Discover and Collect The Best NFTs '

    return (
        <MainContainer>
            <FlexWrapper justify={"space-between"} align={"flex-start"} gap={"auto"}>
                <TextContent>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"flex-start"}>
                        <Title title={title} primary={['Digital Art.']} mainTitle={true}/>
                        <PContent text={`Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}/>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"}  gap={'18px'}>
                        <ButtonPrimary buttonName={'Explore Now'}/>
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
                        <Photo img={img} width={'464px'} height={'444px'} radius={'24px'}/>

                        <Star>
                            <Icon iconId="star" width="18" height="18" viewBox="0 0 35 35"/>

                        </Star>
                        <Group>
                            <Icon iconId="group" width="86" height="86" viewBox="0 0 172 172"/>
                        </Group>
                    </FlexWrapper>
                    <TextFrame>
                        <FlexWrapper direction={"column"} justify={"space-between"} align={"flex-end"} gap={'12px'}>
                            <FlexWrapper direction={'row'} justify={"space-between"} align={"center"} gap={'36px'}>
                                <FlexWrapper direction={"column"} gap={'4px'} justify={"flex-start"} align={"flex-start"}>
                                    <Span spanText={'Ends in'} color={'#D3F85A'}/>
                                    <Span spanText={'05:45:47'} fontSize={'600'} lineHeight={'10px'}/>
                                </FlexWrapper>
                                <FlexWrapper direction={"column"} gap={'4px'} justify={"flex-end"} align={"flex-end"}>
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
  min-height: max-content;
  background-color: #090F1D;
  padding: 92px 111px;
`



const TextContent = styled.div`
  width: 544px;
  height: 585px;
`
const PhotoContent = styled.div`
  width: 575px;
  height: 637px;
  //position: relative;
`
const Star = styled.div`
  position: absolute;
  top: 420px;
  padding-left: 5px;
`

const Group = styled.div`
  position: absolute;
  top: 380px;
  right: 400px;
`

const TextFrame = styled.div`
  width: 264px;
  height: 129px;
  border-radius: 16px;
  border-top: 1px solid #D3F85A;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #131E3A;
  /*position: absolute;
  top: 234px;*/
`

const Wrapper = styled.div`
  width: 506px;
  margin-top: 72px;
  display: flex;
  gap: 94px;
  justify-content: flex-start;
  align-items: center;
  //border-right: 1px solid #D3F85A;
  h2 {
    width: 88px;
    height: 58px;
  }
`