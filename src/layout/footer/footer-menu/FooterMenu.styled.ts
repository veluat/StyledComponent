import styled from "styled-components";

const FooterMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
        &:hover {
            transform: translate(0, -10%);
        }
    }
`

export const S = {FooterMenuWrapper}