import React from 'react';
import {ButtonPrimary} from "../../../components/button-primary/Button-primary";
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const ArtOfWeekSection2 = () => {

    const title = ' and Super Unique Art of This '
    const primary = ['Amazing', 'Week']

    return (
        <StyledArtOfWeek>
            <FlexWrapper justify={"space-between"} align={"flex-start"}>
            <Title title={title} primary={primary}/>
            <ButtonPrimary buttonName={'See All'}/>
            </FlexWrapper>
        </StyledArtOfWeek>
    );
};

const StyledArtOfWeek = styled.section`
  min-height: 100vh;
  background-color: rgba(206, 164, 245, 0.49);
  padding: 46px 56px;
`