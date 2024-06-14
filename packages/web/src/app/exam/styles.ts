import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

export const FormBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
