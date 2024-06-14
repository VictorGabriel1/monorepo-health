import { useContext } from "react";
import { Image } from "react-native";
import { useForm } from "react-hook-form";
import { Content, ForgetPasswordLink, SignUpLink } from "./styles";
import { Container } from "../../components/global/Container";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as yup from "yup";
import { Title } from "../../components/global/Title";

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail valido!")
    .required("Campo obrigatorio!"),
  password: yup
    .string()
    .min(8, "Minimo 8 caracteres!")
    .required("Campo obrigatorio!"),
});

type LoginSchema = yup.InferType<typeof LoginValidationSchema>;

export default function LogIn() {
  const { navigate } = useNavigation();
  const { logIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "john.doe@example.com",
      password: "Senha@123",
    },
    resolver: yupResolver(LoginValidationSchema),
    mode: "onSubmit",
  });

  function handleLogin(data: LoginSchema) {
    const { email, password } = data;
    logIn({ email, password });
  }

  return (
    <Container backgroundColor="#744abc">
      <Content>
        <Title>Login</Title>
        <CustomInput
          label="Usuário"
          control={control}
          error={errors?.email?.message}
          type="text"
          name="email"
          placeholder="E-mail"
          textColor="#fff"
          backgroundColor="#7f60c1"
          errorMessageColor="#fff"
        />
        <CustomInput
          label="Senha"
          control={control}
          error={errors?.password?.message}
          type="password"
          name="password"
          placeholder="Senha"
          textColor="#fff"
          backgroundColor="#7f60c1"
          errorMessageColor="#fff"
        />
        <CustomButton
          title="Login"
          color="#fff"
          textColor="#744abc"
          onPress={handleSubmit(handleLogin)}
        />
        <ForgetPasswordLink>Esqueci minha senha</ForgetPasswordLink>
        <SignUpLink onPress={() => navigate("signUp")}>
          Não tem uma conta?{"\n\n"}Cadastre-se
        </SignUpLink>
      </Content>
    </Container>
  );
}
