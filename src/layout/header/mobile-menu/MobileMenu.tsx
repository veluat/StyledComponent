import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../style/Theme";
import {ItemType} from "../Header";

export const MobileMenu = (props: { menuItems: Array<ItemType> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={item.href}>{item.title}</Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(9, 15, 29, 0.98);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    a {
      color: rgb(131, 131, 130, 1);
      font-size: 22px;
    }
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 253, 0);
    `}
    
    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
    `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: #ffffff;
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`
const ListItem = styled.li`
`
const Link = styled.a`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontGray};
  position: relative;
  text-align: center;

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