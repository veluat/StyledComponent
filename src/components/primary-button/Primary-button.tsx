import { StyledButton } from "@components/primary-button/PrimaryButton.styled.ts";

type ButtonType = {
    buttonName: string;
    width?: string;
    height?: string;
    isHide?: boolean;
};

export const PrimaryButton = (props: ButtonType) => {
    const { buttonName, isHide, ...rest } = props;
    return (
        <>
            {!isHide ? (
                <StyledButton {...rest}>{buttonName}</StyledButton>
            ) : null}
        </>
    );
};