import {ButtonContainer, Labels, MainContainer, Picture, Subtitle, Title, TitleContainer} from "./style";
import PictureImg from "../../assets/christian-wiediger.png";
import {ReactComponent as FileTextLabel} from "../../assets/labels/file-text.svg";
import {ReactComponent as HomeLabel} from "../../assets/labels/home.svg";
import {ReactComponent as MonitorLabel} from "../../assets/labels/monitor.svg";
import {Label} from "../Label/Label";
import {Button} from "../Button/Button";

export const Main = () => {

    return (
        <MainContainer>
            <TitleContainer>
                <div>
                    <Title>Аренда офисов в Москва-Сити</Title>
                    <Subtitle>Более 200 предложений: от 30 м2 до 2000 м2 без комиссии</Subtitle>
                    <ButtonContainer>
                        <Button filled={true} text="Выбрать офис"/>
                        <Button filled={false} text="Заказать звонок"/>
                    </ButtonContainer>
                </div>
                <Picture src={PictureImg}/>
            </TitleContainer>
            <Labels>
                <Label picture={<FileTextLabel/>} text="Юридическое сопровождение"/>
                <Label picture={<HomeLabel/>} text="Помещения от 30 до 2000 м2"/>
                <Label picture={<MonitorLabel/>} text="Только современные и оборудованные офисы"/>
            </Labels>
        </MainContainer>
    );
};