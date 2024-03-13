import {StyledSpanValue} from "@components/span/Span.styled.ts";

export const Span = (props: SpanType) => {
    const {spanValue, ...rest} = props
    return (
        <StyledSpanValue {...rest}>
            {spanValue}
        </StyledSpanValue>
    )
}

type SpanType = {
    spanValue?: string
    fontWeight?: string
    fontSize?: string
    lineHeight?: string
    color?: string
    textAlign?: string
}
