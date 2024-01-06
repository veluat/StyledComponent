import React from 'react';
import {Icon} from "@components/icon";
import styled from "styled-components";
import {theme} from "@assets/style/Theme";
import {useResponsiveSize} from "@/hook";

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

const Star = styled.div`
  position: absolute;
  top: 48%;
  padding-left: 5px;

    // @media ${theme.media.tablet} {
  //   left: 0;
  // }
`

const Group = styled.div`
  position: absolute;
  top: 37.3%;
  left: -60px;
`
