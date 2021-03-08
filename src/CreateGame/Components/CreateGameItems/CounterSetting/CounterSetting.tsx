import {FC} from "react";
import {
    InputWrapper,
    MainContentWrapper,
    NumberInput,
    SettingButton,
    SettingItemWrapper,
    Wrapper,
    ErrorMessage,
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
        defaultValue,
        errorMessage,
        min,
        max,
        incrementValueField,
        decrementValueField,
        isRandom,
        isIncrementDisabled,
        isDecrementDisabled,
    } = useCounterSetting({getValues, setValue, settingItem, errors})

    return (
        <Wrapper>
            <MainContentWrapper>
                <TemplateSettingItem title={title} description={description}/>
                <InputWrapper>
                    <NumberInput ref={register({
                        min: {value: min, message: `Минимум ${min}`},
                        max: {value: max, message: `Максимум ${max}`}
                    })} name={fieldName} defaultValue={defaultValue}/>
                </InputWrapper>
            </MainContentWrapper>
            <SettingItemWrapper>
               <ErrorMessage>{errorMessage}</ErrorMessage>
                <SettingButton onClick={decrementValueField} disabled={isDecrementDisabled}>-</SettingButton>
                <SettingButton onClick={incrementValueField} disabled={isIncrementDisabled}>+</SettingButton>
                {isRandom && <SettingButton>?</SettingButton>}
            </SettingItemWrapper>
        </Wrapper>
    )
}

export default CounterSetting;
