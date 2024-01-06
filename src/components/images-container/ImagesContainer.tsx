import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "@components/flex-wrapper";
import {Span} from "../span/Span";

type ImagesContainerProps = {
    width: string;
    height: string;
    bg: string;
    position?: string
    spanText: string
    avatar: string
    id: number
}

export const ImagesContainer = (props: ImagesContainerProps) => {
    const {width, height, bg, position, spanText, avatar, id} = props;
    return (
        <StyledDiv width={width} height={height} bg={bg} position={position}>
            <GradientOverlay/>
            <AbsoluteWrapper>
                <FlexWrapper gap='12px' justify='flex-start' align='center'>
                    <svg key={id} width='48px' height='48px'>
                        <image xlinkHref={avatar}/>
                    </svg>
                    <FlexWrapper direction='column' gap='4px'>
                        <Span spanText='Owner' fontSize='14px' lineHeight='22px' fontWeight='400'/>
                        <Span
                            key={id}
                            spanText={spanText}
                            fontSize='16px'
                            lineHeight='20px'
                            fontWeight='700'
                        />
                    </FlexWrapper>
                </FlexWrapper>
            </AbsoluteWrapper>
        </StyledDiv>
    );
};

const StyledDiv = styled.div<{
    width: string;
    height: string;
    bg: string;
    position?: string
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.bg});
  background-position-y: -35px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  position: relative;
`

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-image: linear-gradient(to top, rgba(19, 30, 58, 0.98) 0%, rgba(19, 30, 58, 0) 100%);
  border-radius: 16px;
`


const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
`