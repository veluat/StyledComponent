import React from 'react';
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Card} from "../../../components/card/Card";
import img1 from '../../../assets/images/section-2-1.webp'
import img2 from '../../../assets/images/section-2-2.webp'
import img3 from '../../../assets/images/section-2-3.webp'
import {Container} from "../../../components/Container";


export const ArtOfWeekSection2 = () => {

    const title = ' and Super Unique Art of This'
    const primary = ['Amazing', ' Week']

    return (
        <Container>
            <FlexWrapper justify='space-between' align='flex-end'>
                <Title title={title} primary={primary} width='600px'/>
                <ButtonPrimary buttonName={'See All'}/>
            </FlexWrapper>
            <CardContainer>
                <FlexWrapper justify='space-between'>
                    <Card img={img1} width='370px' height='340px' radius='16px' marginBottom='24px'
                          widthButtonClear='178px'/>
                    <Card img={img2} width='370px' height='340px' radius='16px' marginBottom='24px'
                          widthButtonClear='178px'/>
                    <Card img={img3} width='370px' height='340px' radius='16px' marginBottom='24px'
                          widthButtonClear='178px'/>
                </FlexWrapper>
            </CardContainer>
        </Container>
    );
};

const CardContainer = styled.div`
  margin-top: 64px;
`