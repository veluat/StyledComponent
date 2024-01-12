import {FooterMenuItem} from "@layout/footer/footerMenuItem";
import {FooterMenuType} from "@layout/footer/footer-data";
import {FooterMenuWrapper} from "@layout/footer/column/Column.styled.ts";

type ColumnType = {
    menu: FooterMenuType[]
}

export const Column = (props: ColumnType) => {
    const {menu} = props
    return (
        <FooterMenuWrapper>
            {menu.map(el => {
                return <FooterMenuItem key={el.id} title={el.title} items={el.items}/>
            })}
        </FooterMenuWrapper>
    );
};
