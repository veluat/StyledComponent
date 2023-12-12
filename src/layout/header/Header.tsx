import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import {ButtonPrimary} from "../../components/button-primary/Button-primary";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../style/Theme";
import {MobileMenu} from "./mobile-menu/MobileMenu";

const items = ["Marketplace", "Artists", "Community", "Collections"]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify='space-between' align='center'>
                <Logo/>
                <Menu menuItems={items}/>
                <MobileMenu menuItems={items}/>
                <ButtonPrimary buttonName='Contact' height='48px'/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  max-width: 1512px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  height: 104px;
  padding: 28px 111px;

  @media ${theme.media.tablet} {
    padding: 40px 16px 60px;
  }
`