import React from 'react';
import styled from "styled-components";

type PhotoType = {
    img: string
    width?: string
    height?: string
    radius?: string
}

export const Photo = (props: PhotoType) => {
    const {img, ...rest} = props;
    return (
        <StyledPhoto src={img} {...rest} />
    );
};

const StyledPhoto = styled.img<{
    width?: string
    height?: string
    radius?: string
}>`
  max-width: calc(${props => props.width} - 40px);
  max-height: calc(${props => props.height} - 40px);
  object-fit: cover;
  border-radius: ${props => props.radius || '24px'};
  position: relative;
`