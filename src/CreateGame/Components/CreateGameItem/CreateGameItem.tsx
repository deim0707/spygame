import {FC} from "react";
import {
    Wrapper,
    MainContentWrapper,
    TextContentWrapper,
    Title,
    Image,
    Description,
    SettingButton,
    CheckBox,
    NumberInput,
    InputWrapper,
    styleImage,
    ImageWrapper,
    SettingItemWrapper
} from "./createGameItem.style";
import {TypeSettingGame} from "../../../assets/content/SettingItems";
import {ReactComponent as TempImage} from './tempImg.svg';
import useCreateGameItem from "./useCreateGameItem.hook";

interface Props {
    image?: any, // todo добавить в дальнейшем
    title: string,
    description: string,
    type: TypeSettingGame,
    register: any,
    name: string,
    setValue: any,
    getValues: any,
    min: number | undefined,
    max: number | undefined,
}

const CreateGameItem: FC<Props> = ({
                                       title,
                                       description,
                                       type,
                                       register,
                                       name,
                                       setValue,
                                       getValues,
                                       min, max
                                   }) => {
    const {
        setValueField,
        isCheckbox,
        isRandom,
        isCount,
    } = useCreateGameItem({type, getValues, setValue, min, max})

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
                        <NumberInput ref={register} name={name} defaultValue={0}/>
                    )}
                </InputWrapper>
            </MainContentWrapper>
            {(isCount || isRandom) && (
                <SettingItemWrapper>
                    <SettingButton onClick={() => setValueField(name, "decr")}>-</SettingButton>
                    <SettingButton onClick={() => setValueField(name, "incr")}>+</SettingButton>
                    {isRandom && <SettingButton>?</SettingButton>}
                </SettingItemWrapper>
            )}
        </Wrapper>
    )
}

export default CreateGameItem;
