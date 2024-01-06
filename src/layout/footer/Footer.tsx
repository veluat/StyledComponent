import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "@components/flex-wrapper";
import {Logo} from "@components/logo";
import {TextContent} from "@components/text-content/TextContent";
import {Column} from "./column/Column";
import {theme} from "@assets/style/Theme";
import {FooterData} from "./footer-data/FooterData";
import {Socials} from "@components/socials";
import {Copyright} from "./copyright/Copyright";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap='48px' direction='column' justify='center'>
                <FooterContentWrapper>
                    <FlexWrapper direction='column' justify='center'>
                        <Logo/>
                        <TextContent text={FooterData.text} width='272px'/>
                        <Socials socialsTitle={FooterData.socials}/>
                    </FlexWrapper>
                    <FlexWrapper gap='94px' align='flex-start'>
                        <Column menu={FooterData.menu}/>
                    </FlexWrapper>
                </FooterContentWrapper>
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
const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(131, 131, 130, 1);
  padding-bottom: 48px;
`