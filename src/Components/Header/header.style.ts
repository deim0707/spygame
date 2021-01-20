import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ButtonStepBack = styled.button`
  padding: 5px;
  font-size: 1.3rem;
  vertical-align: center;
  &:hover {
    background-color: #B8B7B7;
    cursor: pointer;
  }
`;

export const TextContent = styled.span<{isHaveStepBack: boolean}>`
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: ${props => props.isHaveStepBack ? "50px" : "0"};
`;
