import React, { useEffect, useState } from 'react';
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import styled from "styled-components";
import { theme } from "../../assets/style/Theme";

export const Logo = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia(theme.media.tablet).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(theme.media.tablet);
        const handleMediaQueryChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <LogoWrapper>
            <a href="">
                <FlexWrapper justify="flex-start" gap="8px">
                    <Icon
                        IconTitle='pacMan'
                        width={isMobile ? "24" : "29"}
                        height={isMobile ? "24" : "28"}
                        viewBox='0 0 29 28'
                    />
                    <h3>Creative<span>art</span></h3>
                </FlexWrapper>
            </a>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
  position: relative;

  h3 {
    transform: translateY(10px);
    font-family: 'Canela Text Trial', sans-serif;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFD;
    font-weight: 500;

    @media ${theme.media.tablet} {
      transform: translateY(-10px);
      font-size: 24px;
    }

    span {
      color: #D3F85A
    }
  }
`;