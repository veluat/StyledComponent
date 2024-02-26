import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {Span} from "@components/span";
import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

type FrameProps = {
    title: string
    primary: string[]
    spanText: string
    isLastItem: boolean
    isFirstItem: boolean
}

export const StatsItem = (props: FrameProps) => {
    const {title, primary, spanText, ...rest} = props
    return (
        <StyledFrame {...rest}>
            <FlexWrapper direction={"column"} gap='16px'>
                <Title title={title} primary={primary}/>
                <Span spanText={spanText}/>
            </FlexWrapper>
        </StyledFrame>
    );
};

const StyledFrame = styled.div<{
    isLastItem: boolean,
    isFirstItem: boolean,
}
>`
  display: flex;
  padding-right: ${(props) => (props.isFirstItem ? "29px" : "24px")};
  border-right: ${(props) => (props.isLastItem ? "none" : `1px solid ${theme.colors.primary}`)};
  
`