import styled from "styled-components";

export const Container = styled.li`
  width: 400px;
  border: 1px solid red;
  background-image: ${(param) => `url(${param.image})`};
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  background-image: ${(param) => {
    return `url(${param.image})`;
  }};
`;
