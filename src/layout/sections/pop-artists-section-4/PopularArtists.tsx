import {Container} from "@components/container";
import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button";
import {PopImages} from "@layout/sections/pop-artists-section-4/pop-images";
import popData from "@layout/sections/pop-artists-section-4/pop-data/PopData.ts";
import styled from "styled-components";
import {useResponsiveSize} from "@/hook";

export const PopularArtists = () => {
    const title = 'Popular '
    const title2 = 'On This Week'
    const primary = ['', `Artists `]
    const isHide = useResponsiveSize(1124)

    return (
        <Container id='popular'>
            <FlexWrapper direction='column' gap={isHide ? '32px' : '64px'}>
                <SectionHeader isHide={isHide}>
                    <Title title={title} title2={title2} primary={primary} width={isHide ? '357px':'407px'}/>
                    <PrimaryButton buttonName={'See All'} isHide={isHide}/>
                </SectionHeader>
                <PopImages popData={popData}/>

                {isHide &&
                    <FlexWrapper justify='center'>
                        <PrimaryButton buttonName={'See All'}/>
                    </FlexWrapper>}
            </FlexWrapper>
        </Container>
    );
};

const SectionHeader = styled.div<{isHide: boolean}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.isHide ? 'center' : 'space-between'};
  align-items: ${props => props.isHide ? '' : 'flex-end'};
`