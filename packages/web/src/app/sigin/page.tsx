"use client";

import DefaultButton from "@/components/default/button";
import DefaultInput from "@/components/default/input";
import { Content, LoginBox } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Loading from "../loading";
import { useState } from "react";
import { redirect } from "next/navigation";

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

export default function SigIn() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "ana.oliveira@example.com",
      password: "Senha@123",
    },
    resolver: yupResolver(LoginValidationSchema),
    mode: "onSubmit",
  });

  async function handleSignIn(credentials: LoginSchema) {
    setLoading(true);
    const res = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    if (res?.status == 401) {
      console.log(res);
      setLoading(false);
      alert("Error nas credenciais");
    } else {
      window.location.href = "/";
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Content>
      <LoginBox>
        <DefaultInput
          label="E-mail"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <DefaultInput
          label="Senha"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />
        <DefaultButton onClick={handleSubmit(handleSignIn)}>
          Login
        </DefaultButton>
        <Link href="/signup">Não tem uma conta? Cadastre-se</Link>
      </LoginBox>
    </Content>
  );
}
