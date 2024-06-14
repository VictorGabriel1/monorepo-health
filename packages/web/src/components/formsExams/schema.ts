import * as yup from "yup";

export const schemas = {
  bloodPressure: yup
    .object({
      measurementDate: yup.string().required("Campo obrigatório!"),
      systolic: yup
        .number()
        .required("Campo obrigatório!")
        .min(0, "Valor mínimo é 0")
        .typeError("Deve ser um número!"),
      diastolic: yup
        .number()
        .required("Campo obrigatório!")
        .min(0, "Valor mínimo é 0")
        .typeError("Deve ser um número!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  currentMedications: yup
    .object({
      medication: yup.string().required("Campo obrigatório!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  medicalHistory: yup
    .object({
      allergies: yup.string(),
      chronicDiseases: yup.string(),
      pastSurgeries: yup.string(),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  recentConsultations: yup
    .object({
      consultationDate: yup.string().required("Campo obrigatório!"),
      details: yup.string().required("Campo obrigatório!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  recentExams: yup
    .object({
      examName: yup.string().required("Campo obrigatório!"),
      examDate: yup.string().required("Campo obrigatório!"),
      results: yup.string().required("Campo obrigatório!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  recommendations: yup
    .object({
      recommendation: yup.string().required("Campo obrigatório!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
  vaccinationHistory: yup
    .object({
      vaccineName: yup.string().required("Campo obrigatório!"),
      lastVaccinationDate: yup.string().required("Campo obrigatório!"),
      status: yup.string().required("Campo obrigatório!"),
      userId: yup.string(),
      doctorId: yup.string(),
    })
    .required(),
};

export type FormTypes = {
  bloodPressure: yup.InferType<typeof schemas.bloodPressure>;
  currentMedications: yup.InferType<typeof schemas.currentMedications>;
  medicalHistory: yup.InferType<typeof schemas.medicalHistory>;
  recentConsultations: yup.InferType<typeof schemas.recentConsultations>;
  recentExams: yup.InferType<typeof schemas.recentExams>;
  recommendations: yup.InferType<typeof schemas.recommendations>;
  vaccinationHistory: yup.InferType<typeof schemas.vaccinationHistory>;
};
