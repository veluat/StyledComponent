import {H1Styled, H2Styled} from "@components/title/Title.styled.ts";
import {ReactElement} from "react";

export const Title = (props: TitlePropsType) => {
    const {width, mainTitle, title} = props;
    return (
        mainTitle ? <H1Styled> {title} </H1Styled> : <H2Styled width={width}> {title} </H2Styled>
    )
}

type TitlePropsType = {
    title: ReactElement
    width?: string
    mainTitle?: boolean
}

