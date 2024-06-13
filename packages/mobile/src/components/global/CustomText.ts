import styled from "styled-components/native";

type CustomTextProps = {
  fontSize?: number;
  bold?: boolean;
  textAlign?: "center" | "left" | "right";
};

export const CustomText = styled.Text<CustomTextProps>`
  width: 100%;
  font-size: ${({ fontSize = 16 }) => `${fontSize}px`};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  text-align: ${({ textAlign = "center" }) => textAlign};
`;
