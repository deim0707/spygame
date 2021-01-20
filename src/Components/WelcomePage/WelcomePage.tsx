import styled from "styled-components";
import Header from "../Header/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 1em;
  font-size: 1em;
  border: none;
  outline: none;
  border-radius: 3px;
  color: black;

  &:hover {
    background-color: #B8B7B7;
    cursor: pointer;
  }
`;



const WelcomePage = () => {
    return (
        <Wrapper>
            <Header>Игра шпион</Header>
            <div>
                <Button>Создать игру</Button>
                <Button>Подключиться к игре</Button>
                <Button>Настройки</Button>
                <Button>Правила</Button>
            </div>
        </Wrapper>
    )
}

export default WelcomePage;
