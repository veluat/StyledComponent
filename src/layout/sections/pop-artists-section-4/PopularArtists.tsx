import {SectionContainer} from "@components/section-container";
import {FlexWrapper} from "@components/flex-wrapper";
import {Title} from "@components/title";
import {PopImages} from "@layout/sections/pop-artists-section-4/pop-images";
import styled from "styled-components";
import {useResponsiveSize} from "@/hook";
import {PopData} from "@layout/sections/pop-artists-section-4/pop-data";
import {Button} from "@components/button/Button.tsx";

export const PopularArtists = () => {
    const isHide = useResponsiveSize(1410)

    return (
        <SectionContainer id='popular'>
            <FlexWrapper direction='column' gap={isHide ? '32px' : '64px'}>
                <SectionHeader isHide={isHide}>
                    <Title title={<div>Popular <span>Artists</span> On This Week</div>}
                           width={isHide ? '357px' : '407px'}/>
                    <Button btnType='primary' buttonName='See All' isHide={isHide}/>
                </SectionHeader>
                <PopImages popData={PopData}/>

                {isHide &&
                    <FlexWrapper justify='center'>
                        <Button btnType='primary' buttonName='See All'/>
                    </FlexWrapper>}
            </FlexWrapper>
        </SectionContainer>
    )
}

const SectionHeader = styled.div<{ isHide: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.isHide ? 'center' : 'space-between'};
  align-items: ${props => props.isHide ? '' : 'flex-end'};
`