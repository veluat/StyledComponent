import {FlexWrapper} from "@components/flex-wrapper";
import {Container} from "@components/container";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button";
import {Cards} from "@layout/sections/art-of-week-section-2/cards";
import {useResponsiveSize} from "@/hook";
import styled from "styled-components";
import {theme} from "@assets/style/Theme.ts";
import {CardData} from "@layout/sections/art-of-week-section-2/cardData";

export const ArtOfWeekSection = () => {
    const title = ' and Super Unique Art of This'
    const primary = ['Amazing', ' Week']
    const isHide = useResponsiveSize(1410)
    const isMobile = useResponsiveSize(theme.media.mobile)

    return (
        <Container id="amazing">
            <FlexWrapper direction='column' gap={isHide ? '32px' : '64px'}>
                <SectionHeader isHide={isHide}>
                    <Title title={title} primary={primary} width={isMobile ? '357px' : '600px'}/>
                    <PrimaryButton buttonName={'See All'} isHide={isHide}/>
                </SectionHeader>

                <Cards
                    cardData={CardData}
                    width='370px'
                    height="340px"
                    radius="16px"
                    widthButtonClear={isMobile ? '168px' : '178px'}
                />

                {isHide &&
                    <FlexWrapper justify='center'>
                        <PrimaryButton buttonName={'See All'}/>
                    </FlexWrapper>}
            </FlexWrapper>
        </Container>
    );
};
const SectionHeader = styled.div<{ isHide: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.isHide ? 'center' : 'space-between'};
  align-items: ${props => props.isHide ? 'center' : 'flex-end'};
`