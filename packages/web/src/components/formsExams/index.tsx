import { SubmitHandler, useForm } from "react-hook-form";
import { FormBox } from "./styles";
import DefaultButton from "../default/button";
import DefaultInput from "@/components/default/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "@/services/api";

type fieldLabelsType = {
  measurementDate: string;
  systolic: string;
  diastolic: string;
  medication: string;
  consultationDate: string;
  details: string;
  examName: string;
  examDate: string;
  results: string;
  recommendation: string;
  vaccineName: string;
  lastVaccinationDate: string;
  status: string;
  allergies: string;
  chronicDiseases: string;
  pastSurgeries: string;
  doctorId: string;
  userId: string;
};

const fieldLabels: fieldLabelsType = {
  measurementDate: "Data de Medição",
  systolic: "Sistólica",
  diastolic: "Diastólica",
  medication: "Medicamento",
  consultationDate: "Data da Consulta",
  details: "Detalhes",
  examName: "Nome do Exame",
  examDate: "Data do Exame",
  results: "Resultados",
  recommendation: "Recomendação",
  vaccineName: "Nome da Vacina",
  lastVaccinationDate: "Última Data de Vacinação",
  status: "Status",
  allergies: "Alergias",
  chronicDiseases: "Doenças Crônicas",
  pastSurgeries: "Cirurgias Passadas",
  doctorId: "",
  userId: "",
};

// Criar um componente de formulário genérico
export default function ExamForms({
  schema,
  endpoint,
  title,
  userEmail,
  doctorId,
}: {
  schema: yup.ObjectSchema<any>;
  endpoint: string;
  title: string;
  userEmail: string;
  doctorId: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendData = async (
    endpoint: string,
    data: yup.InferType<typeof schema>
  ) => {
    console.log(userEmail);
    api
      .get(`/users/email/${userEmail}`)
      .then(async (res) => {
        data.userId = res.data.id;
        data.doctorId = doctorId;
        console.log(data);
        api
          .post(`/exams/${endpoint}`, data)
          .then((res) => {
            console.log(res);
            alert(`${title} criado com sucesso!`);
          })
          .catch((e) => {
            alert(
              "Algo deu errado! Verifique se o e-mail do paciente informado está correto"
            );
            console.log(e);
          });
      })
      .catch((e) => console.log(e));
  };

  async function onSubmit(data: yup.InferType<typeof schema>) {
    await sendData(endpoint, data);
  }

  return (
    <FormBox>
      <h2>{title}</h2>
      {Object.keys(schema.fields).map((field) => {
        if (field !== "doctorId" && field !== "userId")
          return (
            <DefaultInput
              key={field}
              label={fieldLabels[field as keyof fieldLabelsType]}
              type={field.includes("Date") ? "date" : "text"}
              error={errors[field]?.message?.toString()}
              {...register(field)}
            />
          );
      })}
      <DefaultButton onClick={handleSubmit(onSubmit)}>Lançar</DefaultButton>
    </FormBox>
  );
}
