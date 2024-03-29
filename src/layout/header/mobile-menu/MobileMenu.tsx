import React, {useState} from "react";
import {ItemType} from "@layout/header";
import {S} from "@layout/header/mobile-menu/MobileMenu.styled.ts";

export const MobileMenu: React.FC<{ menuItems: Array<ItemType> }> = ({menuItems}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup onClick={() => setMenuIsOpen(false)} isOpen={menuIsOpen}>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <S.ListItem key={index}>
                                <S.CustomLink href={item.href}>{item.title}</S.CustomLink>
                            </S.ListItem>
                        )
                    })}
                </ul>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}