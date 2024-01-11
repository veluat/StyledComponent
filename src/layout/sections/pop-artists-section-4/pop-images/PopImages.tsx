import React from 'react';
import {ImagesContainer} from "@components/images-container/ImagesContainer";
import styled from "styled-components";
import {PopType} from "@layout/sections/pop-artists-section-4/pop-data";

type PopImagesProps = {
    popData: PopType[]
}

export const PopImages: React.FC<PopImagesProps> = ({popData}) => {

    return (
        <PopGrid>
            {popData.map((e) => (
                <PopGridItem>
                    <ImagesContainer
                        key={e.id}
                        width={e.width}
                        height={e.height}
                        bg={e.bg}
                        spanText={e.userName}
                        avatar={e.avatar}
                        id={e.id}
                    />
                </PopGridItem>
            ))}
        </PopGrid>
    );
};

const PopGrid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 310px);
`

const PopGridItem = styled.div`
  &:first-child {
    grid-area: 1/1/1/4;
  }

  &:nth-child(2) {
    grid-area: 1/4/1/9;
  }

  &:nth-child(3) {
    grid-area: 2/1/3/5;
  }

  &:nth-child(4) {
    grid-area: 2/5/3/9;
  }

  &:last-child {
    grid-area: 1/9/3/13;
  }
`