import React from 'react';
import styled from "styled-components";

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
