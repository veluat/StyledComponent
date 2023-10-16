import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import section1 from '../../../assets/images/section-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <MainContainer>
            <FlexWrapper justify={"space-between"} align={"flex-start"}>
                <TextContent>
                    <FlexWrapper direction={"column"} justify={"flex-start"} align={"center"}>
                        <h1>Discover and
                            Collect The Best NFTs Digital Art.</h1>
                        <p>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                            Start exploring the world of digital art and NFTs today and take control of your digital
                            assets
                            with confidence!</p>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-start"}>
                        <a>Explore Now</a>
                        <a>Learn More</a>
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <FlexWrapper direction={"column"}>
                            <span>8.9K</span>
                            <span>Art work</span>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <span>65K</span>
                            <span>Artist</span>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <span>87K</span>
                            <span>Collection</span>
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
                        <FlexWrapper direction={"column"} justify={"flex-end"} align={"flex-end"}>
                            <FlexWrapper justify={"space-between"} align={"center"}>
                                <FlexWrapper direction={"column"}>
                                    <span>Ends in</span>
                                    <span>05:45:47</span>
                                </FlexWrapper>
                                <FlexWrapper direction={"column"}>
                                    <span>Current bid</span>
                                    <span>0.24ETH</span>
                                </FlexWrapper>
                            </FlexWrapper>
                            <FlexWrapper justify={"center"} align={"center"}>
                                <a href="#">Place A Bid</a>
                            </FlexWrapper>
                        </FlexWrapper>
                    </TextFrame>
                </PhotoContent>
            </FlexWrapper>
        </MainContainer>
    )
}

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #b7b9bb;
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
  width: 272px;
  padding: 10px;

  a {
    padding: 6px 20px;
  }
`