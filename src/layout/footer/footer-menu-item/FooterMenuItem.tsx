import React from 'react';
import {FooterMenu} from "@layout/footer/footer-menu";
import {S} from "@layout/footer/footer-menu-item/FooterMenuItem.styled.ts";

export const FooterMenuItem: React.FC<PropsType> = ({title, items}) => {
    return (
        <S.FooterMenuItem>
            <h3>{title}</h3>
            <FooterMenu items={items}/>
        </S.FooterMenuItem>
    )
}

type PropsType = {
    title: string
    items: string[]
}
