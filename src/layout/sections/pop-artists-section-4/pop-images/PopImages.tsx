import React from 'react';
import {ImagesContainer} from "@layout/sections/pop-artists-section-4/pop-images/images-container/ImagesContainer";
import {PopType} from "@layout/sections/pop-artists-section-4/pop-data";
import {PopGrid, PopGridItem} from "@layout/sections/pop-artists-section-4/pop-images/PopImages.styled.ts";
import {useResponsiveSize} from "@/hook";

export const PopImages: React.FC<PopImagesProps> = ({popData}) => {
const isTablet = useResponsiveSize(920)
    return (
        <PopGrid>
            {popData.map(e => {
                return (
                    <PopGridItem>
                        <ImagesContainer
                            key={e.id}
                            width={e.width}
                            height={e.height}
                            bg={e.bg}
                            spanText={e.userName}
                            avatar={e.avatar}
                            id={e.id}
                            position={isTablet}
                        />
                    </PopGridItem>
                )
            })}
        </PopGrid>
    )
}

type PopImagesProps = {
    popData: PopType[]
}
