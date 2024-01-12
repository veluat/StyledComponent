import {StyledSpanContent} from "@components/span/Span.styled.ts";

type SpanType = {
    spanText?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    color?: string
}

export const Span = (props: SpanType) => {
    const {spanText, ...rest} = props
    return (
        <StyledSpanContent {...rest}>
            {spanText}
        </StyledSpanContent>
    );
};
