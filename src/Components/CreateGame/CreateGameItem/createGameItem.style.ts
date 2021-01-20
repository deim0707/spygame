import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img``;

export const TextContentWrapper = styled.div``;

export const Title = styled.div`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
`;

export const Description = styled.div`
  margin-left: .5rem;
`;

export const Button = styled.button``;

export const CheckBox = styled.input.attrs({
    type: "checkbox"
})``

export const NumberValue = styled.div``;


// todo убрать, когда появятся нормальные изображения
export const styleImage = {
    width: "50px",
    height: "50px"
}

