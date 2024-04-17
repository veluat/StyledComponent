import {S} from "@components/title/Title.styled.ts";
import {ReactElement} from "react";

export const Title = (props: TitlePropsType) => {
    const {width, mainTitle, title} = props;
    return (
        mainTitle ?
            <S.H1> {title} </S.H1>
            : <S.H2 width={width}> {title} </S.H2>
    )
}

type TitlePropsType = {
    title: ReactElement
    width?: string
    mainTitle?: boolean
}

