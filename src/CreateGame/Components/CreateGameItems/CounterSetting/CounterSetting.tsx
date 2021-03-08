import {FC} from "react";
import {
    InputWrapper,
    MainContentWrapper,
    NumberInput,
    SettingButton,
    SettingItemWrapper,
    Wrapper
} from "../createGameItem.style";
import TemplateSettingItem from "../TemplateSettingItem/TemplateSettingItem";
import {ISettingsGame} from "../../../../assets/content/SettingItems";
import useCounterSetting from "./useCounterSetting.hook";


interface Props {
    image?: any, // todo добавить в дальнейшем
    register: any,
    setValue: any,
    getValues: any,
    errors: any,
    settingItem: ISettingsGame
}

const CounterSetting: FC<Props> = ({
                                       settingItem,
                                       register,
                                       setValue,
                                       getValues,
                                       errors,
                                   }) => {
    const {
        title,
        description,
        fieldName,
        incrementValueField,
        decrementValueField,
        isIncrementDisabled,
        isDecrementDisabled,
    } = useCounterSetting({getValues, setValue, settingItem})

    const isRandom = true; // todo передавать в пропсах
    return (
        <Wrapper>
            <MainContentWrapper>
                <TemplateSettingItem title={title} description={description}/>
                <InputWrapper>
                    <NumberInput ref={register({
                        min: {value: 0, message: "Слишком мало"},
                        max: {value: 10, message: "Превышено максимальное число"}
                    })} name={fieldName} defaultValue={0}/>
                </InputWrapper>
            </MainContentWrapper>
            <SettingItemWrapper>
                <SettingButton onClick={decrementValueField} disabled={isDecrementDisabled}>-</SettingButton>
                <SettingButton onClick={incrementValueField} disabled={isIncrementDisabled}>+</SettingButton>
                {isRandom && <SettingButton>?</SettingButton>}
            </SettingItemWrapper>
        </Wrapper>
    )
}

export default CounterSetting;
