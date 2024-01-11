import styled from "styled-components";
import {FlexWrapper} from "@components/flex-wrapper";
import {theme} from "@assets/style/Theme.ts";

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

const CopyrightStyled = styled.small`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontWhite};
`
