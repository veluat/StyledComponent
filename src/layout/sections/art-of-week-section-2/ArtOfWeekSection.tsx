import React from 'react';
import {PrimaryButton} from '@components/primary-button/Primary-button';
import {Title} from '@components/title';
import styled from 'styled-components';
import {FlexWrapper} from '@components/flex-wrapper';
import {Container} from '@components/container/Container';
import cardData from "./cardData/CardData";
import {Card} from "./card/Card";

export const ArtOfWeekSection = () => {
    const title = ' and Super Unique Art of This';
    const primary = ['Amazing', ' Week'];
    return (
        <Container id="amazing">
            <FlexWrapper justify="space-between" align="flex-end">
                <Title title={title} primary={primary} width="600px"/>
                <PrimaryButton buttonName={'See All'}/>
            </FlexWrapper>
            <CardContainer>
                <Card
                    cardData={cardData}
                    width="370px"
                    height="340px"
                    radius="16px"
                    marginBottom="24px"
                    widthButtonClear="178px"
                />
            </CardContainer>
        </Container>
    );
};

const CardContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;