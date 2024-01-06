import React from 'react';
import {Link} from "react-scroll";
import {FlexWrapper} from "@components/flex-wrapper";

type PropsType = {
    items: string[]
}

export const FooterMenu: React.FC<PropsType> = ({items}) => {
    const menuItems = items.map(item => {
        return (
            <li key={item}>
                <Link to="#">{item}</Link>
            </li>
        )
    })
    return (
        <ul>
            <FlexWrapper direction='column' gap='8px'>
                {menuItems}
            </FlexWrapper>
        </ul>
    )
}