import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

export const TextContentStyled = styled.div`
  width: 426px;
  height: 280px;
  margin-bottom: 40px;
`
export const CreateAndSellWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 1410px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const PhotoGroup = styled.div<{isMobile: boolean}>`
  max-width: 740px;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '343px' : '559px')};
  position: relative;

  @media ${theme.media.tablet} {
    &:first-child {
      height: 70%;
    }

    &:last-child {
      height: 65%;
    }
  }

  @media ${theme.media.mobile} {
    &:first-child {
      height: 65%;
    }

    &:last-child {
      height: 60%;
    }
  }

  @media ${theme.media.extraMobile} {
    width: 190px;
    &:first-child {
      height: 220px;
    }

    &:last-child {
      height: 190px;
    }
`

export const FirstPhoto = styled.div`
  max-width: 410px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  // @media ${theme.media.tablet} {
  //   height: 65%;
  //   width: 70%;
  // }
  //
  // @media ${theme.media.extraTablet} {
  //   height: 50%;
  //   width: 30%;
  // }
  //
  // @media ${theme.media.mobile} {
  //   height: 55%;
  //   width: 60%;
  // }
  //
  // @media ${theme.media.extraMobile} {
  //   width: 190px;
  //   height: 190px;
  // }
`;

export const SecondPhoto = styled.div`
  max-width: 410px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  // @media ${theme.media.tablet} {
  //   height: 70%;
  //   width: 70%;
  // }
  //
  // @media ${theme.media.extraTablet} {
  //   height: 55%;
  //   width: 30%;
  // }
  //
  // @media ${theme.media.mobile} {
  //   height: 60%;
  //   width: 60%;
  // }
  //
  // @media ${theme.media.extraMobile} {
  //   width: 190px;
  //   height: 220px;
  // }
`