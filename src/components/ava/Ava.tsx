import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Span} from "../span/Span";

type AvaProps = {
    avatar: string
    name: string
};

export const Ava = (props: AvaProps) => {
    const {avatar, name} = props;

    return (
        <AvaBox>


        </AvaBox>
    );
};

const AvaBox = styled.div`
  width: 173px;
`;
