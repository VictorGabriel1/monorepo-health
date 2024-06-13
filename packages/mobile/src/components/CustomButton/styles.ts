import { styled } from "styled-components/native";

type ButtonProps = {
  color: string;
};

type ButtonTextProps = {
  textColor: string;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40px;
  max-width: 300px;
  min-width: 100px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ textColor }) => textColor};
  font-weight: 800;
  font-size: 16px;
`;
