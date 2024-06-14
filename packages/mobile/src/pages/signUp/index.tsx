// SignUp.js
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Content } from "./styles";
import { Container } from "../../components/global/Container";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  name: yup.string().min(3, "Nome inválido!").required("Campo obrigatório!"),
  email: yup
    .string()
    .email("Insira um e-mail valido!")
    .required("Campo obrigatório!"),
  password: yup
    .string()
    .min(8, "Minimo 8 caracteres!")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
      "A senha deve conter: 1 letra minuscula, 1 maiscula, 1 numero e 1 caracter especial"
    )
    .required("Campo obrigatorio!"),
  passwordConfirm: yup
    .string()
    .min(8)

    .required("Campo obrigatorio!")
    .oneOf([yup.ref("password")], "As senhas não são iguais!"),
  phoneNumber: yup
    .string()
    .length(11, "Telefone Inválido!")
    .required("Campo obrigatório!"),
  cpf: yup.string().length(11, "CPF Inválido!").required("Campo obrigatório!"),
  birthdate: yup
    .string()
    .length(10, "Data Inválida!")
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Data Inválida! O formato deve ser dd/mm/yyyy"
    )
    .required("Campo obrigatório!"),
  healthPlan: yup.string().required("Campo obrigatório!"),
  // emergencyContact: yup
  //   .string()
  //   .length(11, "Contato Inválido!")
  //   .required("Campo obrigatório!"),
});

type LoginSchema = yup.InferType<typeof LoginValidationSchema>;

export default function SignUp() {
  const { navigate } = useNavigation();
  const { signUp } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: {
      name: "Nara Caproni",
      email: "nara@email.com",
      password: "Senha@123",
      passwordConfirm: "Senha@123",
      cpf: "12345678910",
      birthdate: "11/11/2001",
      phoneNumber: "12345678910",
      // emergencyContact: "12345678910",
      healthPlan: "123456789", // Este campo estava faltando nas default values
    },
    resolver: yupResolver(LoginValidationSchema),
    mode: "onSubmit",
  });

  async function handleSignUp(data: LoginSchema) {
    const {
      name,
      email,
      password,
      birthdate,
      phoneNumber,
      // emergencyContact,
      cpf,
      healthPlan,
    } = data;

    try {
      const result = await signUp({
        name,
        email,
        cpf,
        password,
        birthdate, // Aqui deve ser birthdate conforme o DTO da API
        phoneNumber, // Aqui deve ser phoneNumberNumber conforme o DTO da API
        // emergencyContact, // Aqui deve ser emergencyContact conforme o DTO da API
        healthPlan, // Aqui deve ser healthPlan conforme o DTO da API
      });
      console.log(result);
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error.message);
      // Adicione lógica para lidar com o erro, como mostrar uma mensagem ao usuário
    }
  }

  return (
    <Container backgroundColor="#744abc">
      <Content>
        <CustomInput
          label="Nome"
          control={control}
          error={errors?.name?.message}
          type="text"
          name="name"
          placeholder="Nome"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="E-mail"
          control={control}
          error={errors?.email?.message}
          type="text"
          name="email"
          placeholder="E-mail"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="CPF"
          control={control}
          error={errors?.cpf?.message}
          type="text"
          name="cpf"
          placeholder="CPF"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="Data de Nascimento"
          control={control}
          error={errors?.birthdate?.message}
          type="text"
          name="birthdate"
          placeholder="Data de nascimento"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="Telefone"
          control={control}
          error={errors?.phoneNumber?.message}
          type="text"
          name="phoneNumber"
          placeholder="Telefone"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        {/* <CustomInput
          label="Contato de emergência"
          control={control}
          error={errors?.emergencyContact?.message}
          type="text"
          name="emergencyContact"
          placeholder="Contato de emergência"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        /> */}
        <CustomInput
          label="Número do convênio"
          control={control}
          error={errors?.healthPlan?.message}
          type="text"
          name="healthPlan"
          placeholder="Número do convênio"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="Senha"
          control={control}
          error={errors?.password?.message}
          type="password"
          name="password"
          placeholder="Senha"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />
        <CustomInput
          label="Confirmar Senha"
          control={control}
          error={errors?.passwordConfirm?.message}
          type="password"
          name="passwordConfirm"
          placeholder="Confirme sua senha"
          backgroundColor="#fff"
          errorMessageColor="#f5cc03"
        />

        <CustomButton
          title="Cadastrar"
          color="#fff"
          textColor="#744abc"
          onPress={handleSubmit(handleSignUp)}
        />
      </Content>
    </Container>
  );
}
