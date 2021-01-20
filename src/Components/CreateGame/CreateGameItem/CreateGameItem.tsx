import {
    Wrapper,
    Title,
    Image,
    MainContentWrapper,
    Description,
    Button,
    CheckBox,
    NumberValue,
    styleImage
} from "./createGameItem.style";
import {ReactComponent as TempImage} from './tempImg.svg';
import "./tempImg.svg"
import {FC} from "react";


interface Props {
    image?: any, // todo добавить в дальнейшем
    title: string,
    description: string,
    value: any,
    isHaveCheckBox?: boolean,
    isHaveNumberValue?: boolean,
    isHaveTimer?: boolean,
    isHaveRandom?: boolean,
}

const CreateGameItem: FC<Props> = ({
                                       title,
                                       description,
                                       isHaveCheckBox = false,
                                       value,
                                       isHaveNumberValue = false,
                                       isHaveTimer = false,
                                       isHaveRandom = false,
                                   }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <MainContentWrapper>
                <TempImage style={styleImage}/>
                <Description>{description}</Description>
                {isHaveCheckBox && <CheckBox checked={value}/>}
            </MainContentWrapper>

        </Wrapper>
    )
}

export default CreateGameItem;
