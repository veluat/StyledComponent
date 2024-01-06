import React from 'react';
import {Link} from "react-scroll";
import styled from "styled-components";
import {theme} from "@assets/style/Theme";
import {ItemType} from "../Header";

export const Menu = (props: { menuItems: Array<ItemType> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <LinkStyled>
                                <Link to={item.href} spy={true} smooth={true} offset={0} duration={500}>
                                    {item.title}
                                </Link>
                            </LinkStyled>
                        </ListItem>
                    );
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

  @media ${theme.media.tablet} {
    display: none;
  }
`

const ListItem = styled.li``;

const LinkStyled = styled.span`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontGray};
  position: relative;

  &:hover,
  &:active {
    color: ${theme.colors.fontWhite};
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: 3px;
  }
`;