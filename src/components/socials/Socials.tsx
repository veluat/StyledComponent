import React from 'react';
import {FooterSocialType} from "@layout/footer/footer-data/FooterData";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "@components/flex-wrapper";
import styled from "styled-components";

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
