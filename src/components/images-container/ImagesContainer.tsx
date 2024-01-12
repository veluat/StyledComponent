import {FlexWrapper} from "@components/flex-wrapper";
import {Span} from "@components/span";
import {AbsoluteWrapper, GradientOverlay, StyledDiv} from "@components/images-container/ImagesContainer.styled.ts";

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


