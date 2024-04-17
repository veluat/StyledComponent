import iconSprite from '@assets/images/svg-sprite/svg-sprite.svg'
import {useResponsiveSize} from "@/hook";
import {S} from "@layout/sections/main-section-1/main-photo-content/circle-content/CircleContent.styled.ts";

export const CircleContent = () => {
    const isMobile = useResponsiveSize(640)
    const idGroup = isMobile ? "group_small" : "group"
    return (
        <>
            <S.Star>
                <svg width={isMobile ? "20" : "35"}
                     height={isMobile ? "20" : "35"}
                     viewBox={isMobile ? "0 0 35 35" : "0 0 35 35"}
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconSprite}#star`}/>
                </svg>
            </S.Star>
            <S.Group>
                <svg width={isMobile ? "86" : "172"}
                     height={isMobile ? "86" : "172"}
                     viewBox={isMobile ? "0 0 86 86" : "0 0 172 172"}
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconSprite}#${idGroup}`}/>
                </svg>
            </S.Group>
        </>
    )
}

