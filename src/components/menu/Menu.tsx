import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from '../FlexWrapper';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Marketplace</a>
                </li>
                <li>
                    <a href="">Artists</a>
                </li>
                <li>
                    <a href="">Community</a>
                </li>
                <li>
                    <a href="">Collections</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: #FFFFFD;

  }
`