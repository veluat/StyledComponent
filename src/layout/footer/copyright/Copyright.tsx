import {CopyrightStyled, CopyrightWrapper, LinkWrapper} from "@layout/footer/copyright/Copyright.styled.ts";

export const Copyright = () => {
    return (
        <CopyrightWrapper>
            <CopyrightStyled>© Copyright 2023 - Creativeart</CopyrightStyled>
            <LinkWrapper>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </LinkWrapper>
        </CopyrightWrapper>
    );
};
