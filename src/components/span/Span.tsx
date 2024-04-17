import {S} from "@components/span/Span.styled.ts";

export const Span = (props: SpanType) => {
    const {spanValue, ...rest} = props
    return (
        <S.SpanValue {...rest}>
            {spanValue}
        </S.SpanValue>
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
