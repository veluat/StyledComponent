import {Icon} from "@components/icon";
import {useResponsiveSize} from "@/hook";
import {Group, Star} from "@layout/sections/main-section-1/main-photo-content/circle-content/CircleContent.styled.ts";

export const CircleContent = () => {
    const isMobile = useResponsiveSize(576)

    return (
        <>
            <Star>
                <Icon IconTitle="star" width={isMobile ? "20" : "35"} height={isMobile ? "20" : "35"}
                      viewBox={isMobile ? "0 0 20 20" : "0 0 35 35"}/>
            </Star>
            <Group>
                <Icon IconTitle={isMobile ? "group_small" : "group"} width={isMobile ? "86" : "172"}
                      height={isMobile ? "86" : "172"} viewBox={isMobile ? "0 0 86 86" : "0 0 172 172"}/>
            </Group>
        </>
    );
}

