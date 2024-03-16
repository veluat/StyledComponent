import React from "react";
import {Button} from "@components/button/Button.tsx";
import {FlexWrapper} from "@components/flex-wrapper";

export const ButtonBlock: React.FC<ButtonBlockPropsType> = ({centered = false, width, buttonName}) => {
    return (
        <FlexWrapper gap={centered ? '32px' : '36px'}
                     justify={centered ? 'center' : 'flex-start'}
                     align='center'>
            <Button btnType='primary' buttonName={buttonName} width={width}/>
            <a href='#'>Learn More</a>
        </FlexWrapper>
    )
}

type ButtonBlockPropsType = {
    centered?: boolean
    width?: string
    buttonName: string
}
