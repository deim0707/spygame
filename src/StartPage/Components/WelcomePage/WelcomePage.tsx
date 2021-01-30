import {FC} from "react";
import {Wrapper, ButtonWrapper} from "./welcomePage.style";
import {Button} from "../../../assets/styles/sharedElements.style";
import Header from "../../../assets/Components/Header/Header";


const WelcomePage:FC = () => {
    return (
        <Wrapper>
            <Header>Игра шпион</Header>
            <ButtonWrapper>
                <Button>Создать игру</Button>
                <Button>Подключиться к игре</Button>
                <Button>Настройки</Button>
                <Button>Правила</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default WelcomePage;
