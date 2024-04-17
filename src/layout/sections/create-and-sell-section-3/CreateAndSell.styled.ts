import styled from "styled-components";

const CreateAndSellWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;

    @media screen and (max-width: 1410px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const S = {CreateAndSellWrapper}