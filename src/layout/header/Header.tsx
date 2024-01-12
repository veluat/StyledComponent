import {Menu} from "@layout/header/menu";
import {Logo} from "@components/logo";
import {MobileMenu} from "@layout/header/mobile-menu";
import {PrimaryButton} from "@components/primary-button";
import {StyledHeader} from "@layout/header/Header.styled.ts";

export type ItemType = {
    title: string
    href: string
}

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
            <PrimaryButton buttonName='Contact' height='48px'/>
        </StyledHeader>
    );
};
