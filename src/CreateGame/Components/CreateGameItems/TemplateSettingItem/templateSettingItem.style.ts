import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

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
