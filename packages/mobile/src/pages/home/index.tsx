import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { Container } from "../../components/global/Container";
import { CustomText } from "../../components/global/CustomText";
import { Content } from "./styles";
import * as LocalAuthentication from "expo-local-authentication";

export default function Home() {
  const { navigate } = useNavigation();

  async function handleBiometry() {
    if (
      (await LocalAuthentication.hasHardwareAsync()) &&
      (await LocalAuthentication.isEnrolledAsync())
    ) {
      await LocalAuthentication.authenticateAsync()
        .then(() => navigate("personalData"))
        .catch((e) => console.log(e));
    } else {
      navigate("personalData");
    }
  }

  return (
    <Container backgroundColor="#fff">
      <Content>
        <CustomText>
          Paciente, coloque sua digital para acessar seu prontuário médico.
        </CustomText>
        <CustomButton
          title="Escaner Biometria"
          color="#744abc"
          textColor="#fff"
          onPress={() => handleBiometry()}
        />
        <CustomText>
          Ao escanear sua biometria, o paciente receberá um email o informando
          sobre o acesso a suas informações.
        </CustomText>
      </Content>
    </Container>
  );
}
