import {FlexWrapper} from "@components/flex-wrapper";
import {Socials} from "@components/socials";
import {Logo} from "@components/logo";
import {TextContent} from "@components/text-content";
import {FooterData} from "@layout/footer/footer-data";
import {Column} from "@layout/footer/column";
import {Copyright} from "@layout/footer/copyright";
import {FooterContentWrapper, FooterLogoWrapper, StyledFooter} from "@layout/footer/Footer.styled.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap='48px' direction='column' justify='center'>
                <FooterContentWrapper>
                    <FooterLogoWrapper>
                        <Logo/>
                        <TextContent text={FooterData.text} width='272px'/>
                        <Socials socialsTitle={FooterData.socials}/>
                    </FooterLogoWrapper>
                    <FlexWrapper gap='94px' align='flex-start'>
                        <Column menu={FooterData.menu}/>
                    </FlexWrapper>
                </FooterContentWrapper>
                <Copyright/>
            </FlexWrapper>
        </StyledFooter>
    );
};
