import { Container } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Content = styled(Container)`
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  width: 70%;
  min-height: 500px;
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;
