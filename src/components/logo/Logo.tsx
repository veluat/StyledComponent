import {theme} from "@assets/style/Theme.ts";
import {FlexWrapper} from "@components/flex-wrapper";
import {Icon} from "@components/icon";
import {LogoWrapper} from "@components/logo/Logo.styled.ts";
import {useResponsiveSize} from "@/hook";
import { animateScroll as scroll } from 'react-scroll'

export const Logo = () => {
    const isMobile = useResponsiveSize(theme.media.tablet);
    const onClickHandler = () => scroll.scrollToTop()

    return (
        <LogoWrapper>
            <a onClick={onClickHandler}>
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
    )
}
