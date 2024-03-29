import React from "react";
import {Link} from "react-scroll";
import {ItemType} from "@layout/header";
import {S} from "@layout/header/menu/Menu.styled.ts";

export const Menu: React.FC<{menuItems: Array<ItemType>}> = ({menuItems}) => {
    return (
        <S.Menu>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <Link to={item.href} spy={true} smooth={true} offset={0} duration={500}>
                                {item.title}
                            </Link>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.Menu>
    )
}