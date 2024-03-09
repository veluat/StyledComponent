import React from "react";
import {StyledButton} from "@components/button/Button.styled.ts";

export const Button: React.FC<BtnPropsType> = ({isHide, btnType, buttonName, ...rest}) => {
    return (
        <>
            {!isHide ? (
                <StyledButton btnType={btnType} {...rest} >{buttonName}</StyledButton>
            ) : null}
        </>
    )
}

type BtnPropsType = {
    isHide?: boolean
    buttonName: string
    width?: string
    height?: string
    btnType: 'outlined' | 'primary'
}