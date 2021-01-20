import {FC} from "react";
import {
    Wrapper,
    Title,
    Image,
    TextContentWrapper,
    Description,
    Button,
    CheckBox,
    NumberValue,
    styleImage
} from "./createGameItem.style";
import {ReactComponent as TempImage} from './tempImg.svg';

interface Props {
    image?: any, // todo добавить в дальнейшем
    title: string,
    description: string,
    isHaveCheckBox?: boolean,
    isHaveNumberValue?: boolean,
    isHaveTimer?: boolean,
    isHaveRandom?: boolean,
    register?: any,
    name?: string,
}

// TODO доделать компонент под различные состояния

const CreateGameItem: FC<Props> = ({
                                       title,
                                       description,
                                       isHaveCheckBox = false,
                                       isHaveNumberValue = false,
                                       isHaveTimer = false,
                                       isHaveRandom = false,
                                       register,
                                       name
                                   }) => {

    return (
        <Wrapper>
            <TempImage style={styleImage}/>
            <TextContentWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContentWrapper>
            {isHaveCheckBox && <CheckBox ref={register} name={name}/>}
        </Wrapper>
    )
}

export default CreateGameItem;
