import {StyledPhoto} from "@components/photo/Photo.styled.ts";

type PhotoType = {
    img: string;
    width: string;
    height: string;
    radius?: string;
    marginBottom?: string;
    objectPosition?: string;
};

export const Photo = (props: PhotoType) => {
    const {img, ...rest} = props;
    return (
        <>
            <StyledPhoto src={img} {...rest} />
        </>
    );
};
