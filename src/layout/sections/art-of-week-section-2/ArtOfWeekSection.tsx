import {FlexWrapper} from "@components/flex-wrapper";
import {Container} from "@components/container";
import {Title} from "@components/title";
import {PrimaryButton} from "@components/primary-button";
import {Card} from "@layout/sections/art-of-week-section-2/card";
import cardData from "@layout/sections/art-of-week-section-2/cardData/CardData.tsx";
import {CardContainer} from "@layout/sections/art-of-week-section-2/ArtOfWeekSection.styled.ts";

export const ArtOfWeekSection = () => {
    const title = ' and Super Unique Art of This';
    const primary = ['Amazing', ' Week'];
    return (
        <Container id="amazing">
            <FlexWrapper justify="space-between" align="flex-end">
                <Title title={title} primary={primary} width="600px"/>
                <PrimaryButton buttonName={'See All'}/>
            </FlexWrapper>
            <CardContainer>
                <Card
                    cardData={cardData}
                    width="370px"
                    height="340px"
                    radius="16px"
                    marginBottom="24px"
                    widthButtonClear="178px"
                />
            </CardContainer>
        </Container>
    );
};
