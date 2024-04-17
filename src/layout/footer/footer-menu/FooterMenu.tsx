import React from 'react';
import {S} from "@layout/footer/footer-menu/FooterMenu.styled.ts";

export const FooterMenu: React.FC<PropsType> = ({items}) => {
    const menuItems = items.map(item => {
        return (
            <li key={item}>
                <a href="#">{item}</a>
            </li>
        )
    })
    return (
        <ul>
            <S.FooterMenuWrapper>
                {menuItems}
            </S.FooterMenuWrapper>
        </ul>
    )
}

type PropsType = {
    items: string[]
}