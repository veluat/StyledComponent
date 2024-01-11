import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {Span} from "@components/span";
import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";

type FrameProps = {
    title: string
    primary: string[]
    spanText: string
}

export const StatsItem = (props: FrameProps) => {
    const {title, primary, spanText} = props
    return (
        <StyledFrame>
            <FlexWrapper direction={"column"} gap='16px'>
                <Title title={title} primary={primary}/>
                <Span spanText={spanText}/>
            </FlexWrapper>
        </StyledFrame>
    );
};

const StyledFrame = styled.div`
  :nth-child(-n + 2) {
    padding-right: 24px;
    border-right: 1px solid ${theme.colors.primary}
  }

  :first-child {
    padding-right: 29px;
  }
`