import {StyledPhoto} from "@components/photo/Photo.styled.ts";

export const Photo = (props: PhotoType) => {
    const {img, alt, ...rest} = props;
    return (
        <>
            <StyledPhoto src={img} alt={alt} {...rest} />
        </>
    )
}

type PhotoType = {
    img: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    radius?: string;
    margin?: string;
    marginBottom?: string;
    objectPosition?: string;
    alt?: string
};

