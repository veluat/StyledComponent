import React from 'react';
import styled from "styled-components";
import {Title} from "../../../../components/title";
import {TextContent} from "../../../../components/text-content";
import {FlexWrapper} from "../../../../components/flex-wrapper";
import {PrimaryButton} from "../../../../components/primary-button";
import {theme} from "../../../../assets/style/Theme";

export const MainContent = () => {
    const title = 'Discover and Collect The Best NFTs'
    return (
        <TextContentStyled>
            <FlexWrapper direction={"column"} justify={"flex-start"} align={"flex-start"} wrap="wrap">
                <Title title={title} primary={[' Digital Art.']} mainTitle={true}/>
                <TextContent
                    text={`Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!`}/>
            </FlexWrapper>
            <FlexWrapper justify={"flex-start"} align='center' gap={'36px'} wrap="wrap">
                <PrimaryButton buttonName={'Explore Now'} width='178px'/>
                <a>Learn More</a>
            </FlexWrapper>
        </TextContentStyled>
    );
}

const TextContentStyled = styled.div`
  max-width: 544px;
  height: 585px;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    width: 343px;
  }
`