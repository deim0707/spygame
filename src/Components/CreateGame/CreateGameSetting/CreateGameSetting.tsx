import {Wrapper, ButtonStart} from "./createGameSetting.style";
import {useForm} from "react-hook-form";
import Header from "../../Header/Header";
import CreateGameItem from "../CreateGameItem/CreateGameItem";

const inputsCreateGame = [
    {
        order: 1,
        type: "checkbox",
        fieldName: "online",
        title: "Онлайн раздача",
        description: "вы получите код игры, по которому остальные игроки смогут подключиться",
    },
    {
        order: 2,
        type: "checkbox",
        fieldName: "leading",
        title: "Выбрать ведущего",
        description: "ведущий задаёт вопрос первым",
    },
]


const CreateGameSetting = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header isHaveStepBack={true}>Создать игру</Header>

                {inputsCreateGame.map(input =>(
                    <CreateGameItem key={input.order} isHaveCheckBox={true} title={input.title}
                                    description={input.description}
                                    name={input.fieldName} register={register}/>
                ))}

                <ButtonStart type="submit">Начать</ButtonStart>
            </form>
        </Wrapper>
    )
}

export default CreateGameSetting;
