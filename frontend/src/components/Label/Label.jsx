import {LabelContainer, LabelText} from "./style";

export const Label = ({picture, text}) => {
    return (
        <LabelContainer>
            {picture}
            <LabelText>{text}</LabelText>
        </LabelContainer>
    );
};
