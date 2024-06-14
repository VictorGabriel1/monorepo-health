import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  span {
    font-size: 50px;
    width: 100%;
    font-weight: bold;
    padding: 0px 50px;
  }
`;

export const Box = styled.div`
  width: 70%;
  height: max-content;
  padding: 10px;
  max-width: 650px;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  /* background: radial-gradient(
    circle at center,
    rgba(25, 25, 112, 0.1) 0,
    black 200%
  ); */
  border-radius: 15px;
  /* box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.5); */
`;
