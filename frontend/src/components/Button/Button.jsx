import {StyledButton} from "./style";

export const Button = ({filled, text}) => {
    return (
        <StyledButton filled={filled}>{text}</StyledButton>
    )
};