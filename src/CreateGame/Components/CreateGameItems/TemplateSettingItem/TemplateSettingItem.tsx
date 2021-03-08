import {FC} from "react"
import {ImageWrapper, styleImage, TextContentWrapper, Description, Title} from "./templateSettingItem.style";
import {ReactComponent as TempImage} from "../tempImg.svg";

interface Props {
    title: string,
    description: string,
}

const TemplateSettingItem: FC<Props> = ({title, description}) => {
    return (
        <>
            <ImageWrapper>
                <TempImage style={styleImage}/>
            </ImageWrapper>
            <TextContentWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </TextContentWrapper>
        </>
    )
}

export default TemplateSettingItem;
