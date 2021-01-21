import {FC, useCallback, useState} from "react";
import {
    Wrapper,
    MainContentWrapper,
    TextContentWrapper,
    Title,
    Image,
    Description,
    SettingButton,
    CheckBox,
    NumberValue,
    InputWrapper,
    styleImage,
    ImageWrapper,
    SettingItemWrapper
} from "./createGameItem.style";
import {TypeSettingGame} from "../../../Assets/Content/SettingItems";
import {ReactComponent as TempImage} from './tempImg.svg';

interface Props {
    image?: any, // todo добавить в дальнейшем
    title: string,
    description: string,
    type: TypeSettingGame,
    register: any,
    name: string,
}

const CreateGameItem: FC<Props> = ({
                                       title,
                                       description,
                                       type,
                                       register,
                                       name
                                   }) => {

    const [valueInput, setValueInput] = useState(0);
    const decr = useCallback(() => setValueInput(oldVal => oldVal - 1), [])
    const incr = useCallback(() => setValueInput(oldVal => oldVal + 1), [])

    const isCheckbox = type === "checkbox",
        isRandom = type === "count+random",
        isCount = type === "count";

    return (
        <Wrapper>
            <MainContentWrapper>
                <ImageWrapper>
                    <TempImage style={styleImage}/>
                </ImageWrapper>
                <TextContentWrapper>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </TextContentWrapper>
                <InputWrapper>
                    {isCheckbox && <CheckBox ref={register} name={name}/>}
                    {(isCount || isRandom) && (
                        <NumberValue ref={register} name={name} disabled value={valueInput}/>
                    )}
                </InputWrapper>
            </MainContentWrapper>
            {(isCount || isRandom) && (
                <SettingItemWrapper>
                    <SettingButton onClick={decr}>-</SettingButton>
                    <SettingButton onClick={incr}>+</SettingButton>
                    {isRandom && <SettingButton>?</SettingButton>}
                </SettingItemWrapper>
            )}
        </Wrapper>
    )
}

export default CreateGameItem;
