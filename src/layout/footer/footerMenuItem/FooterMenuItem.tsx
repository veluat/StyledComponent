import React from 'react';
import styled from "styled-components";
import {FooterMenu} from "@layout/footer/footerMenu";

type PropsType = {
    title: string
    items: string[]
    direction?: string
    gap?: string
}

export const FooterMenuItem: React.FC<PropsType> = ({title, items}) => {
    return (
        <FooterMenuItemStyled>
            <h3>{title}</h3>
            <FooterMenu items={items}/>
        </FooterMenuItemStyled>
    );
};

const FooterMenuItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`