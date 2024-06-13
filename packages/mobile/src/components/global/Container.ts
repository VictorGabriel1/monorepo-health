import { styled } from "styled-components/native";

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.ScrollView.attrs<ContainerProps>(
  ({ backgroundColor }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      paddingVertical: 40,
      backgroundColor: backgroundColor,
      width: "100%",
    },
    keyboardShouldPersistTaps: "always",
  })
)`
  flex: 1;
  display: flex;
`;
