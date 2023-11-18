import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {PContent} from "../../components/text-content/PContent";
import {Icon} from "../../components/icon/Icon";
import {Column} from "./column/Column";
import {Container} from "../../components/Container";

export const Footer = () => {
    const row1 = ['Explore', 'Art Sign In', 'Collectibles', 'Domain Name', 'Utility']
    const row2 = ['Statistic', 'Ranking', 'Collectibles', 'Activity', '']
    const row3 = ['Company', 'About Us', 'Career', 'Support', 'Partners']
    const row4 = ['Resources', 'Help Center', 'Platform Status', 'Blog', '']
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper gap='48px' direction='column' justify='center'>
                    <FlexWrapper justify='space-between'
                                 style={{borderBottom: '1px solid rgba(131, 131, 130, 1)', paddingBottom: '48px'}}>
                        <FlexWrapper direction='column' justify='center'>
                            <Logo/>
                            <PContent
                                text='Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy it!'/>
                            <FlexWrapper gap='12px'>
                                <a>
                                    <Icon iconId='facebook' width='24px' height='24px' viewBox='0 0 24 24'/>
                                </a>
                                <a>
                                    <Icon iconId='telegram' width='24px' height='24px' viewBox='0 0 24 24'/>
                                </a>
                                <a>
                                    <Icon iconId='twitter' width='24px' height='24px' viewBox='0 0 24 24'/>
                                </a>
                                <a>
                                    <Icon iconId='linkedin' width='24px' height='24px' viewBox='0 0 24 24'/>
                                </a>
                            </FlexWrapper>
                        </FlexWrapper>
                        <FlexWrapper gap='94px' align='flex-start'>
                            <Column text={row1}/>
                            <Column text={row2}/>
                            <Column text={row3}/>
                            <Column text={row4}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper justify='space-between' align='center'>
                        <small>© Copyright 2023 - Creativeart</small>
                        <FlexWrapper gap='28px' align='center'>
                            <a>Privacy Policy</a>
                            <a>Terms & Conditions</a>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  gap: 48px;

  p {
    margin: 30px 0 24px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(255, 255, 253, 1);
  }
`