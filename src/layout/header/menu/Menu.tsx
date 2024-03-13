import {Link} from "react-scroll";
import {ItemType} from "@layout/header";
import {ListItem, StyledMenu} from "@layout/header/menu/Menu.styled.ts";

export const Menu = (props: { menuItems: Array<ItemType> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link to={item.href} spy={true} smooth={true} offset={0} duration={500}>
                                {item.title}
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    )
}
