import {DescriptionStyled} from "@components/description/Description.styled.ts";

export const Description = (props: DescriptionPropsType) => {
    const {description, width, ...rest} = props
    return (
        <DescriptionStyled width={width} {...rest}>
            {description}
        </DescriptionStyled>
    )
}

type DescriptionPropsType = {
    description: string
    width?: string
}
