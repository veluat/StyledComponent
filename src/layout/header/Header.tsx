import React from "react";
import {Menu} from "@layout/header/menu";
import {Logo} from "@components/logo";
import {MobileMenu} from "@layout/header/mobile-menu";
import {S} from "@layout/header/Header.styled.ts";
import {Button} from "@components/button/Button.tsx";

const items: ItemType[] = [
    {title: 'Marketplace', href: 'home'},
    {title: 'Artists', href: 'amazing'},
    {title: 'Community', href: 'best'},
    {title: 'Collections', href: 'popular'},
]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Logo/>
            <Menu menuItems={items}/>
            <MobileMenu menuItems={items}/>
            <Button btnType='primary' buttonName='Contact' height='48px'/>
        </S.Header>
    )
}

export type ItemType = {
    title: string
    href: string
}