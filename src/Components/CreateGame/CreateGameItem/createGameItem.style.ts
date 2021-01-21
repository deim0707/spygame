import styled from "styled-components";
import {Button} from "../../WelcomePage/welcomePage.style";


export const Wrapper = styled.div`
  padding: 5px;
  margin-top: 1rem;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #B8B7B7;
    transition: border-color .2s;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const MainContentWrapper = styled.label`
  display: flex;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img``;
export const styleImage = { // todo убрать, когда появятся нормальные изображения
    width: "50px",
    height: "50px"
}

export const TextContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

export const Description = styled.div`
  margin-top: .5rem;
`;

export const InputWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input.attrs({
    type: "checkbox"
})``

export const SettingItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SettingButton = styled(Button).attrs({
    type: "button"
})`
  width: 60px;
  height: 40px;
  margin-left: .5rem;
`

export const NumberValue = styled.input.attrs({
    type: "number",
})``;





