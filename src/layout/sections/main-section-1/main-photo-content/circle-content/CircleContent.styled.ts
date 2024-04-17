import styled from "styled-components";

const Star = styled.div`
    position: absolute;
    left: 10%;
    top: 50%;
    padding-left: 5px;

    @media screen and (max-width: 640px) {
        padding-left: 0;
        left: 11%;
    }

    @media screen and (max-width: 576px) {
        left: 8%;
    }
`

const Group = styled.div`
    position: absolute;
    left: -1%;
    top: 39%;

    @media screen and (max-width: 640px) {
        left: 5.5%;
        top: 45.2%;
    }

    @media screen and (max-width: 576px) {
        left: -1%;
        top: 42.3%;
    }
`
export const S = {
    Star,
    Group
}