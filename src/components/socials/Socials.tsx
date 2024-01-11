import styled from "styled-components";
import {FooterSocialType} from "@layout/footer/footer-data";
import {FlexWrapper} from "@components/flex-wrapper";
import {Icon} from "@components/icon";

type SocialsType = {
    socialsTitle: FooterSocialType[]
}

export const Socials = (props: SocialsType) => {
    const {socialsTitle} = props
    return (
        <FlexWrapper gap='12px'>
            {socialsTitle.map((el, i) =>
                <AStyled href={el.link} key={i}>
                    <Icon iconId={el.id}
                          IconTitle={el.title}
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'/>
                </AStyled>
            )}
        </FlexWrapper>
    );
};
const AStyled = styled.a`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(255, 255, 255, 1);
`
