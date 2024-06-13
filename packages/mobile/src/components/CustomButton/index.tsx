import type { ButtonProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface CustomButtonProps extends ButtonProps {
  title: string;
  color: string;
  textColor: string;
}

export default function CustomButton({
  title,
  color,
  textColor,
  ...rest
}: CustomButtonProps) {
  return (
    <ButtonContainer color={color} {...rest}>
      <ButtonText textColor={textColor}>{title}</ButtonText>
    </ButtonContainer>
  );
}
