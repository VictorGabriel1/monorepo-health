import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import { Container } from "../../components/global/Container";
import { CustomText } from "../../components/global/CustomText";
import { Content } from "./styles";

export default function Home() {
  const { navigate } = useNavigation();
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
          onPress={() => navigate("personalData")}
        />
        <CustomText>
          Ao escanear sua biometria, o paciente receberá um email o informando
          sobre o acesso a suas informações.
        </CustomText>
      </Content>
    </Container>
  );
}
