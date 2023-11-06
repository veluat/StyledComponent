import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {ButtonPrimary} from "../../components/button-primary/Button-primary";
import {themes} from "../../style/themes";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <a href="">
                <ButtonPrimary buttonName='Contact'/>
                </a>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 104px;
  background-color: ${themes.backgroundColor};
  padding: ${themes.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`