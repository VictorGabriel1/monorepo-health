import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native/types";
import {
  CustomInputStyleProps,
  ErrorText,
  InputContainer,
  InputText,
  Label,
} from "./styles";

interface CustomInputProps extends CustomInputStyleProps, TextInputProps {
  type: "text" | "password";
  name: string;
  label?: string;
  error?: string;
  control: Control<any>;
  placeholder?: string;
}

export default function CustomInput({
  type,
  name,
  label,
  error,
  control,
  placeholder,
  borderBottomColor,
  widthResponsive = 100,
  errorMessageColor = "#fff",
  backgroundColor = "transparent",
  borderRadius = 10,
  textColor = "#000",
  labelColor = "#fff",
  ...rest
}: CustomInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputContainer widthResponsive={widthResponsive}>
          {label && <Label labelColor={labelColor}>{label}</Label>}
          <InputText
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            placeholder={placeholder}
            textColor={textColor}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            borderBottomColor={borderBottomColor}
            secureTextEntry={!!(type === "password")}
            {...rest}
          />
          {error && (
            <ErrorText errorMessageColor={errorMessageColor}>{error}</ErrorText>
          )}
        </InputContainer>
      )}
    />
  );
}
