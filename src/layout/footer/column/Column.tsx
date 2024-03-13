import {FooterMenuItem} from "@layout/footer/footer-menu-item";
import {FooterMenuType} from "@layout/footer/footer-data";
import {FooterMenuWrapper} from "@layout/footer/column/Column.styled.ts";

export const Column = (props: ColumnType) => {
    const {menu} = props
    return (
        <FooterMenuWrapper>
            {menu.map(el => {
                return <FooterMenuItem key={el.id} title={el.title} items={el.items}/>
            })}
        </FooterMenuWrapper>
    )
}

type ColumnType = {
    menu: FooterMenuType[]
}
