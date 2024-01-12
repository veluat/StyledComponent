import {StyledH1, StyledH2, StyledSpan} from "@components/title/Title.styled.ts";

type TitlePropsType = {
    title: string
    title2?: string
    mainTitle?: boolean
    primary: string[]
    width?: string
}

export const Title = (props: TitlePropsType) => {
    const {title, primary, title2, mainTitle, width, ...rest} = props;
    return (
        mainTitle ?
            <StyledH1>{title}
                <StyledSpan>{primary}</StyledSpan>
            </StyledH1>
            : <StyledH2 width={width} {...rest}>
                <StyledSpan>{primary[0]}</StyledSpan>
                {title}
                <StyledSpan>{primary[1]}</StyledSpan>
                {title2}
            </StyledH2>
    );
};
