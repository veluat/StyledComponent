import {S} from "@layout/footer/copyright/Copyright.styled.ts";

export const Copyright = () => {
    return (
        <S.CopyrightWrapper>
            <S.Copyright>© Copyright 2023 - Creativeart</S.Copyright>
            <S.LinkWrapper>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </S.LinkWrapper>
        </S.CopyrightWrapper>
    );
};
