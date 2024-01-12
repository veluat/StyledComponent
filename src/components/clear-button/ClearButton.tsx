import {StyledButtonClear} from "@components/clear-button/ClearButton.styles.ts";

type ButtonType = {
    buttonName: string
    widthButtonClear?: string
}

export const ClearButton = (props: ButtonType) => {
    const {buttonName, widthButtonClear, ...rest} = props;
    return (
        <StyledButtonClear widthButtonClear={widthButtonClear} {...rest}>
            {buttonName}
        </StyledButtonClear>
    );
};