import {Menu} from "@layout/header/menu";
import {Logo} from "@components/logo";
import {MobileMenu} from "@layout/header/mobile-menu";
import {StyledHeader} from "@layout/header/Header.styled.ts";
import {Button} from "@components/button/Button.tsx";

const items: ItemType[] = [
    {title: 'Marketplace', href: 'home'},
    {title: 'Artists', href: 'amazing'},
    {title: 'Community', href: 'best'},
    {title: 'Collections', href: 'popular'},
]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <MobileMenu menuItems={items}/>
            <Button btnType='primary' buttonName='Contact' height='48px'/>
        </StyledHeader>
    )
}

export type ItemType = {
    title: string
    href: string
}