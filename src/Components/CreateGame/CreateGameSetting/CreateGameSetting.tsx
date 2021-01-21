import {useForm} from "react-hook-form";
import Header from "../../Header/Header";
import CreateGameItem from "../CreateGameItem/CreateGameItem";
import {Wrapper, ButtonStart, Form} from "./createGameSetting.style";
import {settingItems} from "../../../Assets/Content/SettingItems";


const CreateGameSetting = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header isHaveStepBack={true}>Создать игру</Header>

                {settingItems.map(input => (
                    <CreateGameItem key={input.order} type={input.type} title={input.title}
                                    description={input.description}
                                    name={input.fieldName} register={register}/>
                ))}

                <ButtonStart type="submit">Начать</ButtonStart>
            </Form>
        </Wrapper>
    )
}

export default CreateGameSetting;
