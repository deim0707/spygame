import styled from "styled-components";
import {Button} from "../../../assets/styles/sharedElements.style";


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
  :disabled {
    cursor: not-allowed;
    :hover {
      background-color: transparent;
    }
  }
`

export const NumberInput = styled.input.attrs({
    type: "number",
})`
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`;





