import styled from "styled-components";

export const StyledPhoto = styled.img<StyledPhotoType>`
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width || '100%'};
  max-height: ${(props) => props.maxHeight};
  height: ${(props) => props.height || '100%'};
  object-fit: cover;
  border-radius: ${(props) => props.radius || '24px'};
  margin-bottom: ${(props) => props.marginBottom || 0};
  object-position: ${(props) => props.objectPosition || 'top'};
  position: relative;
`

type StyledPhotoType = Partial<{
    width: string
    maxWidth: string
    height: string
    maxHeight: string
    radius: string
    margin: string
    marginBottom: string
    objectPosition: string
}>