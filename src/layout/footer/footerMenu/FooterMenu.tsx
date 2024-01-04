import React from 'react';
import {Link} from "react-scroll";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

type PropsType = {
    items: string[]

}
export const FooterMenu: React.FC<PropsType> = ({items}) => {
    const menuItems = items.map(item => {
        return (
            <MenuItem key={item}>
                <Link to="#">{item}</Link>
            </MenuItem>
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

const MenuItem = styled.li`
`