import {FC} from "react"
import {useForm} from "react-hook-form";
import Header from "../../../assets/Components/Header/Header";
import {Wrapper, ButtonStart, Form} from "./createGameSetting.style";
import {ISettingsGame, settingComponentsByType, settingItems} from "../../../assets/content/SettingItems";


const CreateGameSetting: FC = () => {
    const {register, handleSubmit, setValue, getValues, errors} = useForm();
    const onSubmit = (data: any) => {
        console.log(errors)
        console.log(data)
    };
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header isHaveStepBack={true}>Создать игру</Header>

                {settingItems.map((itemSetting: ISettingsGame) => {
                    const ItemSettingComponent: any = settingComponentsByType[itemSetting.type]
                    return (
                        <ItemSettingComponent
                            key={itemSetting.order}
                            settingItem={itemSetting}
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                            errors={errors}
                        />
                    )
                })}
                <ButtonStart type="submit">Начать</ButtonStart>
            </Form>
        </Wrapper>
    )
}

export default CreateGameSetting;
