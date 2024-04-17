import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 30px;
    flex-basis: 343px;
    width: 100%;
    flex-wrap: wrap;
    flex-grow: 1;
    position: relative;

    @media screen and (max-width: 1120px) {
        justify-content: center;
        flex-grow: 1;
        width: 100%;
    }
`
export const S = {StyledCard}
