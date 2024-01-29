import React from 'react';
import {Link} from "react-scroll";
import {FooterMenuWrapper} from "@layout/footer/footerMenu/FooterMenu.styled.ts";

type PropsType = {
    items: string[]
}

export const FooterMenu: React.FC<PropsType> = ({items}) => {
    const menuItems = items.map(item => {
        return (
            <li key={item}>
                <Link to="#">{item}</Link>
            </li>
        )
    })
    return (
        <ul>
            <FooterMenuWrapper>
                {menuItems}
            </FooterMenuWrapper>
        </ul>
    )
}