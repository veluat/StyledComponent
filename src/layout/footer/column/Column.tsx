import styled from "styled-components";
import {FooterMenuItem} from "@layout/footer/footerMenuItem";
import {FooterMenuType} from "@layout/footer/footer-data";

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

const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;
`