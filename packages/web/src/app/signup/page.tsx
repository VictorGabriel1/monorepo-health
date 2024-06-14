// pages/signup.tsx

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "@/components/default/button";
import DefaultInput from "@/components/default/input";
import { Content, SignUpBox } from "./styles";
import Link from "next/link";
import * as yup from "yup";
import api from "@/services/api";

export const DoctorValidationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .email("Insira um e-mail válido!")
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
  crm: yup.string().required("Campo obrigatório!"),
  specialty: yup.string().required("Campo obrigatório!"),
});

type SignUpSchema = yup.InferType<typeof DoctorValidationSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Dr. Matheus Pacco",
      email: "matheus.pacco@example.com",
      password: "Senha@123",
      passwordConfirm: "Senha@123",
      crm: "97788",
      specialty: "Geral",
    },
    resolver: yupResolver(DoctorValidationSchema),
    mode: "onSubmit",
  });

  async function handleSignUp(data: SignUpSchema) {
    const { passwordConfirm, ...form } = data;
    await api
      .post("/doctors", form)
      .then((res) => {
        console.log(res);
        window.location.href = "/signin";
      })
      .catch((e) => console.log("error: " + Object.values(e.response.data)));
  }

  return (
    <Content>
      <SignUpBox>
        <DefaultInput
          label="Nome"
          error={errors.name?.message}
          {...register("name")}
        />
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
        <DefaultInput
          label="Confirme sua Senha"
          type="password"
          error={errors.password?.message}
          {...register("passwordConfirm")}
        />
        <DefaultInput
          label="CRM"
          error={errors.crm?.message}
          {...register("crm")}
        />
        <DefaultInput
          label="Especialidade"
          error={errors.specialty?.message}
          {...register("specialty")}
        />
        <DefaultButton onClick={handleSubmit(handleSignUp)}>
          Cadastrar
        </DefaultButton>
        <Link href="/signin">Já tem uma conta? Faça login</Link>
      </SignUpBox>
    </Content>
  );
}
