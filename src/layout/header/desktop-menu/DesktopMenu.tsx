import React from "react";
import {ItemType} from "@layout/header";
import {S} from "@layout/header/desktop-menu/DesktopMenu.styled.ts";
import {NavMenu} from "@layout/header/nav-menu/NavMenu.tsx";
import {Fade} from "react-awesome-reveal";

export const DesktopMenu: React.FC<{ menuItems: Array<ItemType> }> = ({menuItems}) => {
    return (
        <Fade delay={400} triggerOnce={true}>
            <S.DesktopMenu>
                <NavMenu menuItems={menuItems}/>
            </S.DesktopMenu>
        </Fade>
    )
}