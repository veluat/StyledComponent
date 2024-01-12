import React from 'react';
import {FooterMenu} from "@layout/footer/footerMenu";
import {FooterMenuItemStyled} from "@layout/footer/footerMenuItem/FooterMenuItem.styled.ts";

type PropsType = {
    title: string
    items: string[]
    direction?: string
    gap?: string
}

export const FooterMenuItem: React.FC<PropsType> = ({title, items}) => {
    return (
        <FooterMenuItemStyled>
            <h3>{title}</h3>
            <FooterMenu items={items}/>
        </FooterMenuItemStyled>
    );
};
