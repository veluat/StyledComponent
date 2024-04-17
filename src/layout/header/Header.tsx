import React from "react";
import {DesktopMenu} from "@layout/header/desktop-menu";
import {Logo} from "@components/logo";
import {S} from "@layout/header/Header.styled.ts";
import {Button} from "@components/button/Button.tsx";
import {useResponsiveSize} from "@/hook";
import {BurgerMenu} from "@layout/header/burger-menu";
import {Fade} from "react-awesome-reveal";
import {useWindowScroll} from "@/hook/useWindowScroll.tsx";
import {animateScroll as scroll} from 'react-scroll'

const items: ItemType[] = [
    {title: 'Marketplace', href: 'home'},
    {title: 'Artists', href: 'amazing'},
    {title: 'Community', href: 'best'},
    {title: 'Collections', href: 'popular'},
]

export const Header: React.FC = () => {
    const isMobile = useResponsiveSize(990)
    const isScrolledWidow = useWindowScroll()
    const scrollToBottom = () => {
        scroll.scrollToBottom()
    }
    return (
        <S.Header isScrolled={isScrolledWidow}>
            <Fade delay={400} triggerOnce={true}>
                <Logo/>
            </Fade>
            {isMobile ?
                <BurgerMenu menuItems={items}/>
                : <DesktopMenu menuItems={items}/>
            }
            <Fade delay={400} triggerOnce={true}>
                <div onClick={scrollToBottom}>
                    <Button btnType='primary' buttonName='Contact' height='48px'/>
                </div>
            </Fade>
        </S.Header>
    )
}

export type ItemType = {
    title: string
    href: string
}