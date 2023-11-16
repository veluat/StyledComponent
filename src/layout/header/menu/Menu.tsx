import React from 'react';
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import {theme} from "../../../style/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-items: center;
  }
`
const ListItem = styled.li`

  

`

const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontGray};
  position: relative;

  &:hover {
    color: ${theme.colors.fontWhite};
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: 3px;
  }

  &:active {
    color: ${theme.colors.fontWhite};
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: 3px;
  }
`