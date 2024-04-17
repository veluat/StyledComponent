import {S} from "@components/description/Description.styled.ts";

export const Description = (props: DescriptionPropsType) => {
    const {description, width, ...rest} = props
    return (
        <S.Description width={width} {...rest}>
            {description}
        </S.Description>
    )
}

type DescriptionPropsType = {
    description: string
    width?: string
}
