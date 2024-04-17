import {SectionContainer} from "@components/section-container";
import {FlexWrapper} from "@components/flex-wrapper";
import {S} from "./PopularArtists.styled.ts"
import {Title} from "@components/title";
import {PopImages} from "@layout/sections/pop-artists-section-4/pop-images";
import {useResponsiveSize} from "@/hook";
import {PopData} from "@layout/sections/pop-artists-section-4/pop-data";
import {Button} from "@components/button/Button.tsx";
import {Fade} from "react-awesome-reveal";

export const PopularArtists = () => {
    const isHide = useResponsiveSize(1410)

    return (
        <Fade cascade={true} damping={1} delay={400} triggerOnce={true}>
            <SectionContainer id='popular'>
                <FlexWrapper direction='column' gap={isHide ? '32px' : '64px'}>
                    <S.SectionHeader isHide={isHide}>
                        <Title title={<div>Popular <span>Artists</span> On This Week</div>}
                               width={isHide ? '357px' : '307px'}/>
                        <Button btnType='primary' buttonName='See All' isHide={isHide}/>
                    </S.SectionHeader>
                    <PopImages popData={PopData}/>

                    {isHide &&
                        <FlexWrapper justify='center'>
                            <Button btnType='primary' buttonName='See All'/>
                        </FlexWrapper>}
                </FlexWrapper>
            </SectionContainer>
        </Fade>
    )
}