import React from "react";
import {S} from "@components/button/Button.styled.ts";

export const Button: React.FC<BtnPropsType> = ({isHide, btnType, buttonName, ...rest}) => {
    return (
        <>
            {!isHide ? (
                <S.Button btnType={btnType} {...rest} >{buttonName}</S.Button>
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