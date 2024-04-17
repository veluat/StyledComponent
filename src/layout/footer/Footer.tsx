import {FlexWrapper} from "@components/flex-wrapper";
import {Socials} from "@components/socials";
import {Logo} from "@components/logo";
import {Description} from "@components/description";
import {FooterData} from "@layout/footer/footer-data";
import {Copyright} from "@layout/footer/copyright";
import {S} from "@layout/footer/Footer.styled.ts";
import {Column} from "@layout/footer/column";
import {Fade} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <Fade delay={400} triggerOnce={true}>
            <S.Footer>
                <FlexWrapper gap='48px' direction='column' justify='center'>
                    <S.FooterContentWrapper>
                        <S.FooterLogoWrapper>
                            <Logo/>
                            <Description description={FooterData.text} width='272px'/>
                            <Socials socialsTitle={FooterData.socials}/>
                        </S.FooterLogoWrapper>
                        <FlexWrapper gap='94px' align='flex-start'>
                            <Column menu={FooterData.menu}/>
                        </FlexWrapper>
                    </S.FooterContentWrapper>
                    <Copyright/>
                </FlexWrapper>
            </S.Footer>
        </Fade>
    )
}
