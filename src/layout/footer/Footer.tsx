import {FlexWrapper} from "@components/flex-wrapper";
import {Socials} from "@components/socials";
import {Logo} from "@components/logo";
import {Description} from "@components/description";
import {FooterData} from "@layout/footer/footer-data";
import {Copyright} from "@layout/footer/copyright";
import {FooterContentWrapper, FooterLogoWrapper, StyledFooter} from "@layout/footer/Footer.styled.ts";
import {Column} from "@layout/footer/column";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap='48px' direction='column' justify='center'>
                <FooterContentWrapper>
                    <FooterLogoWrapper>
                        <Logo/>
                        <Description description={FooterData.text} width='272px'/>
                        <Socials socialsTitle={FooterData.socials}/>
                    </FooterLogoWrapper>
                    <FlexWrapper gap='94px' align='flex-start'>
                        <Column menu={FooterData.menu}/>
                    </FlexWrapper>
                </FooterContentWrapper>
                <Copyright/>
            </FlexWrapper>
        </StyledFooter>
    )
}
