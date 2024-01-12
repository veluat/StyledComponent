import React from 'react';
import {ImagesContainer} from "@components/images-container/ImagesContainer";
import {PopType} from "@layout/sections/pop-artists-section-4/pop-data";
import {PopGrid, PopGridItem} from "@layout/sections/pop-artists-section-4/pop-images/PopImages.styled.ts";

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
