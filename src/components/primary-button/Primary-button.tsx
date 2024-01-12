import {StyledButton} from "@components/primary-button/PrimaryButton.styled.ts";

type ButtonType = {
    buttonName: string
    width?: string
    height?: string
}

export const PrimaryButton = (props: ButtonType) => {
    const {buttonName, ...rest} = props;
    return (
        <StyledButton {...rest}>
            {props.buttonName}
        </StyledButton>
    );
};
