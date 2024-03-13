import {FooterSocialType} from "@layout/footer/footer-data";
import {FlexWrapper} from "@components/flex-wrapper";
import {Icon} from "@components/icon";
import {SocialWrap} from "@components/socials/Socials.styled.ts";

export const Socials = (props: SocialsType) => {
    const {socialsTitle} = props
    return (
        <FlexWrapper gap='12px'>
            {socialsTitle.map((el, i) =>
                <SocialWrap>
                    <a href={el.link} target='_blank' rel='noreferrer' key={i}>
                        <Icon iconId={el.id}
                              IconTitle={el.title}
                              width='24px'
                              height='24px'
                              viewBox='0 0 24 24'/>
                    </a>
                </SocialWrap>
            )}
        </FlexWrapper>
    )
}

type SocialsType = {
    socialsTitle: FooterSocialType[]
}

