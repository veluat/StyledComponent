import React from "react";
import {S} from "./NavMenu.styled.ts";
import {ItemType} from "@layout/header";

export const NavMenu: React.FC<PropsType> = ({menuItems, closeMenu}) => {
    return (
        <ul>
            {menuItems.map((item) => {
                return (
                    <S.ListItem key={item.title}>
                        <S.NavLink
                            to={item.href}
                            activeClass='active'
                            onClick={closeMenu}
                            spy={true}
                            smooth={true}
                            offset={-50}
                        >
                            {item.title}
                        </S.NavLink>
                    </S.ListItem>
                );
            })}
        </ul>
    );
};

type PropsType = {
    menuItems: Array<ItemType>;
    closeMenu?: () => void;
};