import {FC} from "react";
import {Wrapper, ButtonWrapper, Button} from "./welcomePage.style";
import Header from "../Header/Header";


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
