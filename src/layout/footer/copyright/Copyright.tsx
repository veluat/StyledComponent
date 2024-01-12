import {FlexWrapper} from "@components/flex-wrapper";
import {CopyrightStyled} from "@layout/footer/copyright/Copyright.styled.ts";

export const Copyright = () => {
    return (
        <FlexWrapper justify='space-between' align='center'>
            <CopyrightStyled>© Copyright 2023 - Creativeart</CopyrightStyled>
            <FlexWrapper gap='28px' align='center'>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </FlexWrapper>
        </FlexWrapper>
    );
};
