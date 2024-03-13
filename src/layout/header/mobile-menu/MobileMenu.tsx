import {ItemType} from "@layout/header";
import {
    BurgerButton,
    CustomLink,
    ListItem,
    MobileMenuPopup,
    StyledMobileMenu
} from "@layout/header/mobile-menu/MobileMenu.styled.ts";

export const MobileMenu = (props: { menuItems: Array<ItemType> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <CustomLink href={item.href}>{item.title}</CustomLink>
                            </ListItem>
                        );
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}
