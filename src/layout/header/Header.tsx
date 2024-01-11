import styled from "styled-components";
import {Menu} from "@layout/header/menu";
import {Logo} from "@components/logo";
import {MobileMenu} from "@layout/header/mobile-menu";
import {PrimaryButton} from "@components/primary-button";
import {theme} from "@assets/style/Theme.ts";

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

const StyledHeader = styled.header`
  position: sticky;
  z-index: 3333;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 16px;
  border-bottom: 1px solid ${theme.colors.secondaryBg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1512px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  height: 104px;
  padding: 28px 111px;
  background-image: url('../../assets/images/bg-image/BgImage.svg');
  background-color: rgba(5, 7, 16, 0.95);

  @media ${theme.media.tablet} {
    padding: 40px 16px 60px;
  }
`