import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {Link} from "react-scroll";

const ListItem = styled.li`
    position: relative;
`

const NavLink = styled(Link)`
    &:hover,
    &.active {
        color: ${theme.colors.pureWhite};
        position: relative;

        &::before {
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            background-color: ${theme.colors.primary};
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`
export const S = {ListItem, NavLink}