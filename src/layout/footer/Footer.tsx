import {Socials} from "@components/socials";
import {Logo} from "@components/logo";
import {Description} from "@components/description";
import {FooterData} from "@layout/footer/footer-data";
import {Copyright} from "@layout/footer/copyright";
import {
    FooterColumnWrapper,
    FooterContentWrapper,
    FooterLogoWrapper,
    StyledFooter
} from "@layout/footer/Footer.styled.ts";
import {Column} from "@layout/footer/column";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContentWrapper>
                <FooterLogoWrapper>
                    <Logo/>
                    <Description description={FooterData.text} width='272px'/>
                    <Socials socialsTitle={FooterData.socials}/>
                </FooterLogoWrapper>
                <FooterColumnWrapper>
                    <Column menu={FooterData.menu}/>
                </FooterColumnWrapper>
            </FooterContentWrapper>
            <Copyright/>
        </StyledFooter>
    )
}
