import {FC} from "react";
import {CheckBox, InputWrapper, MainContentWrapper, Wrapper} from "../createGameItem.style";
import TemplateSettingItem from "../TemplateSettingItem/TemplateSettingItem";
import {ISettingsGame} from "../../../../assets/content/SettingItems";

interface Props {
    settingItem: ISettingsGame
    register: any
}

const CheckboxSetting: FC<Props> = ({settingItem,register}) => {
    return (
        <Wrapper>
            <MainContentWrapper>
                <TemplateSettingItem title={settingItem.title} description={settingItem.description}/>
                <InputWrapper>
                    <CheckBox ref={register} name={settingItem.fieldName}/>
                </InputWrapper>
            </MainContentWrapper>
        </Wrapper>
    )
}

export default CheckboxSetting;
