import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LogoWrapper>
            <a href="">
                <FlexWrapper justify="space-between" gap="8px">
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
    position: absolute;
    top: 10px;
    left: 37px;
    font-family: Canela, sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFD;

    span {
      color: #D3F85A
    }
  }

`
