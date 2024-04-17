import styled from "styled-components";

const TextContentStyled = styled.div`
    max-width: 426px;
    width: 100%;
    max-height: 280px;
    height: 100%;
    margin-bottom: 40px;

    a {
        &:hover {
            transform: translate(0, -5%);
        }
    }
`
export const S = {TextContentStyled}