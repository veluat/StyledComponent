import React from 'react';
import styled from "styled-components";
import ava1 from "../../assets/images/ava-1.svg";
import {Ava} from "../ava/Ava";

type ImagesContainerProps = {
    width: string;
    height: string;
    bg: string;
    position?: string

};

export const ImagesContainer = (props: ImagesContainerProps) => {
    const {width, height, bg, position} = props;
    return (
        <StyledDiv width={width} height={height} bg={bg} position={position}>
            <GradientOverlay/>
            <AbsoluteWrapper>
                <Ava spanText='Osvaldo Percy' xlinkHref={ava1}/>
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
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-image: linear-gradient(to top, rgba(19, 30, 58, 0.98) 0%, rgba(19, 30, 58, 0) 100%);
  border-radius: 16px;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
`;