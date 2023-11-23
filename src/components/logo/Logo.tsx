import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoWrapper>
            <a href="">
                <FlexWrapper justify="flex-start" gap="8px">
                    <Icon iconId='pacMan' width="29" height="28" viewBox="0 0 29 28"/>
                    <h3>Creative<span>art</span></h3>
                </FlexWrapper>
            </a>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
  position: relative;

  h3 {
    transform: translateY(10px);
    font-family: 'Canela Text Trial', sans-serif;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFD;
    font-weight: 500;
    
    span {
      color: #D3F85A
    }
  }
`
