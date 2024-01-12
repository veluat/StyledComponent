import {StyledTextContent} from "@components/text-content/TextContent.styled.ts";

type PContentType = {
    text: string
    width?: string
}

export const TextContent = (props: PContentType) => {
    const {text, width, ...rest} = props
    return (
        <StyledTextContent width={width} {...rest}>
            {text}
        </StyledTextContent>
    );
};
