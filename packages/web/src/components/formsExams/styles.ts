import { styled } from "styled-components";

export const FormBox = styled.div`
  align-items: center;
  gap: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 60%;
  input,
  label {
    color: #000;
  }

  input {
    border: 2px solid black !important;
  }

  h2 {
    color: #000;
    text-align: center;
    margin-bottom: 20px;
  }
`;
