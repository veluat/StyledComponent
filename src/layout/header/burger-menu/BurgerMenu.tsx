import React, {useState} from "react";
import {ItemType} from "@layout/header";
import {S} from "@layout/header/burger-menu/BurgerMenu.styled.ts";
import {Fade} from "react-awesome-reveal";
import {NavMenu} from "@layout/header/nav-menu/NavMenu.tsx";

export const BurgerMenu: React.FC<{ menuItems: Array<ItemType> }> = ({menuItems}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onClickBurgerHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    const onClickPopUpHandler = () => setMenuIsOpen(false)
    return (
        <S.BurgerMenu>
            <S.BurgerButton onClick={onClickBurgerHandler} isOpen={menuIsOpen}>
                <span></span>
            </S.BurgerButton>

            <S.BurgerMenuPopup onClick={() => setMenuIsOpen(false)} isOpen={menuIsOpen}>
                <Fade direction={'down'} delay={200}>
                    <NavMenu menuItems={menuItems} closeMenu={onClickPopUpHandler}/>
                </Fade>
            </S.BurgerMenuPopup>
        </S.BurgerMenu>
    )
}