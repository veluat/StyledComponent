import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {PContent} from "../../components/text-content/PContent";
import {Column} from "./column/Column";
import {theme} from "../../style/Theme";
import {FooterData} from "./FooterData";
import {Socials} from "../../components/socials/Socials";
import {Copyright} from "./copyright/Copyright";

export const Footer = () => {

    return (
        <StyledFooter>
            <FlexWrapper gap='48px' direction='column' justify='center'>
                <FlexWrapper justify='space-between'
                             style={{borderBottom: '1px solid rgba(131, 131, 130, 1)', paddingBottom: '48px'}}>
                    <FlexWrapper direction='column' justify='center'>
                        <Logo/>
                        <PContent text={FooterData.text} width='272px'/>
                        <Socials socialsTitle={FooterData.socials}/>
                    </FlexWrapper>
                    <FlexWrapper gap='94px' align='flex-start'>
                        <Column menu={FooterData.menu}/>
                    </FlexWrapper>
                </FlexWrapper>
                <Copyright/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  gap: 48px;
  max-width: 1512px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: ${theme.padding};

  @media ${theme.media.mobile} {
    padding: 60px 16px 40px;
  }

  p {
    margin: 30px 0 24px;
  }
`
