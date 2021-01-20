import styled, {StyledComponent} from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: .4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper: StyledComponent<any, any> = styled.div``;

export const Button = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  
  border: 1px solid #B8B7B7;
  border-radius: 3px;
  color: black;

  &:hover {
    background-color: #B8B7B7;
    cursor: pointer;
  }
`;
