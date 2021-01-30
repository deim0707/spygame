import styled from "styled-components";

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
    transition: background-color .5s;
    cursor: pointer;
  }
`;
