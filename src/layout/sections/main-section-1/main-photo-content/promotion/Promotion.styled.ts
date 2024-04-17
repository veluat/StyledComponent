import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

const PromotionWrap = styled.div`
    max-width: 304px;
    width: 100%;
    border-radius: 16px;
    border-top: 1px solid ${theme.colors.primary};
    padding: 20px;
    background-color: ${theme.colors.secondaryBg};
    box-shadow: 0 9px 50px rgba(23, 36, 65, 0.04);

    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;

    @media ${theme.media.extraTablet} {
        width: 224px;
        height: 137px;
        padding: 12px;
    }

    @media ${theme.media.mobile} {
        right: 10px;
    }

    @media ${theme.media.extraMobile} {
        right: 20px;
    }
`

const PromotionInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const S = {
    PromotionWrap,
    PromotionInfo
}
