import React from 'react';
import {FooterMenu} from "@layout/footer/footer-menu";
import {FooterMenuItemStyled} from "@layout/footer/footer-menu-item/FooterMenuItem.styled.ts";

export const FooterMenuItem: React.FC<PropsType> = ({title, items}) => {
    return (
        <FooterMenuItemStyled>
            <h3>{title}</h3>
            <FooterMenu items={items}/>
        </FooterMenuItemStyled>
    )
}

type PropsType = {
    title: string
    items: string[]
    direction?: string
    gap?: string
}
