import { styled } from "styled-components/native";

interface TextInputProps {
  borderBottomColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  textColor?: string;
}

interface InputContainerProps {
  widthResponsive?: number;
}

interface LabelProps {
  labelColor?: string;
}

interface ErrorTextProps {
  errorMessageColor?: string;
}

export interface CustomInputStyleProps
  extends TextInputProps,
    LabelProps,
    ErrorTextProps,
    InputContainerProps {}

export const InputContainer = styled.View<InputContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  width: ${({ widthResponsive }) => widthResponsive + "%"};
  max-width: 400px;
`;

export const InputText = styled.TextInput<TextInputProps>`
  display: flex;
  height: 40px;
  padding: 10px;
  width: 90%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  color: ${({ textColor }) => textColor};
  ${({ borderBottomColor }) =>
    borderBottomColor &&
    `border-bottom-width: 1px; border-color: ${borderBottomColor}`};
`;

export const ErrorText = styled.Text<ErrorTextProps>`
  position: absolute;
  color: ${({ errorMessageColor }) => errorMessageColor};
  top: 75px;
  left: 20px;
  margin-left: 5px;
`;

export const Label = styled.Text<LabelProps>`
  color: ${({ labelColor }) => labelColor};
  width: 90%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
