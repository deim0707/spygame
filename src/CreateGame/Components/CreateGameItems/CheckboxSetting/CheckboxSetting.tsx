import {FC} from "react";
import {CheckBox, InputWrapper, MainContentWrapper, Wrapper} from "../createGameItem.style";
import TemplateSettingItem from "../TemplateSettingItem/TemplateSettingItem";
import {ISettingsGame} from "../../../../assets/content/SettingItems";

interface Props {
    settingItem: ISettingsGame
    register: any
}

const CheckboxSetting: FC<Props> = ({settingItem, register}) => {
    const {title, defaultValue, description, fieldName} = settingItem;
//todo Добавить чтение дефолтного значения
    return (
        <Wrapper>
            <MainContentWrapper>
                <TemplateSettingItem title={title} description={description}/>
                <InputWrapper>
                    <CheckBox ref={register} name={fieldName}/>
                </InputWrapper>
            </MainContentWrapper>
        </Wrapper>
    )
}

export default CheckboxSetting;
