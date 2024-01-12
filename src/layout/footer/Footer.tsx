import {FlexWrapper} from "@components/flex-wrapper";
import {Socials} from "@components/socials";
import {Logo} from "@components/logo";
import {TextContent} from "@components/text-content";
import {FooterData} from "@layout/footer/footer-data";
import {Column} from "@layout/footer/column";
import {Copyright} from "@layout/footer/copyright";
import {FooterContentWrapper, StyledFooter} from "@layout/footer/Footer.styled.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap='48px' direction='column' justify='center'>
                <FooterContentWrapper>
                    <FlexWrapper direction='column' justify='center'>
                        <Logo/>
                        <TextContent text={FooterData.text} width='272px'/>
                        <Socials socialsTitle={FooterData.socials}/>
                    </FlexWrapper>
                    <FlexWrapper gap='94px' align='flex-start'>
                        <Column menu={FooterData.menu}/>
                    </FlexWrapper>
                </FooterContentWrapper>
                <Copyright/>
            </FlexWrapper>
        </StyledFooter>
    );
};
