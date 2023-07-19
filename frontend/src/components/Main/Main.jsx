import {MainContainer, Picture, Subtitle, Title} from "./style";
import PictureImg from "../../assets/christian-wiediger.png";

export const Main = () => {

    return (
        <MainContainer>
            <div>
                <Title>Аренда офисов в Москва-Сити</Title>
                <Subtitle>Более 200 предложений: от 30 м2 до 2000 м2 без комиссии</Subtitle>
            </div>
            <Picture src={PictureImg} />
        </MainContainer>
    );
};