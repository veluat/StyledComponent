import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <a href="">Contact</a>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 52px;
  padding: 0 56px;
  background-color: rgba(116, 206, 116, 0.53);
  display: flex;
  justify-content: space-between;
  align-items: center;
`