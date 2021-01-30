import {useForm} from "react-hook-form";
import Header from "../../../assets/Components/Header/Header";
import CreateGameItem from "../CreateGameItem/CreateGameItem";
import {Wrapper, ButtonStart, Form} from "./createGameSetting.style";
import {settingItems} from "../../../assets/content/SettingItems";


const CreateGameSetting = () => {
    const {register, handleSubmit, setValue, getValues} = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header isHaveStepBack={true}>Создать игру</Header>

                {settingItems.map(input => (
                    <CreateGameItem key={input.order} type={input.type} title={input.title}
                                    setValue={setValue}
                                    getValues={getValues}
                                    description={input.description}
                                    name={input.fieldName}
                                    min={input?.min}
                                    max={input?.max}
                                    register={register}/>
                ))}

                <ButtonStart type="submit">Начать</ButtonStart>
            </Form>
        </Wrapper>
    )
}

export default CreateGameSetting;
