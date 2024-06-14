import React, { useContext } from "react";
import { Container } from "../../components/global/Container";
import { CustomText } from "../../components/global/CustomText";
import { Content } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import Section from "../../components/Section";
import formatDate from "../../../utils/formatDate"; // Importe a função formatDate aqui

export default function PersonalData() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <Container backgroundColor="#fff">
        <Content>
          <CustomText>Sem informações disponveis</CustomText>
        </Content>
      </Container>
    );
  }

  return (
    <Container backgroundColor="#fff">
      <Content>
        <CustomText fontSize={24} textAlign="left" bold>
          {user.name}
        </CustomText>
        <Section
          title="Informações Pessoais"
          items={[
            `Email: ${user.email}`,
            `Telefone: ${user.phoneNumber}`,
            `CPF: ${user.cpf}`,
            `Plano de Saúde: ${user.healthPlan}`,
            `Data de Nascimento: ${formatDate(user.birthdate)}`, // Formatação da data aqui
          ]}
        />
        <Section
          title="Endereços"
          items={
            user.addresses
              ? user.addresses.map(
                  (address) =>
                    `${address.streetName}, ${address.streetNumber} - ${address.district}, ${address.city}/${address.state} - ${address.zip}`
                )
              : []
          }
        />
        <Section
          title="Histórico Médico"
          items={
            user.medicalHistory
              ? user.medicalHistory.map((history) => ({
                  "Doenças Crônicas": history.chronicDiseases,
                  "Cirurgias Passadas": history.pastSurgeries,
                }))
              : []
          }
        />
        <Section
          title="Medicações Atuais"
          items={
            user.currentMedications
              ? user.currentMedications.map(
                  (medication) => `${medication.medication}`
                )
              : []
          }
        />
        <Section
          title="Pressão Arterial"
          items={
            user.bloodPressure
              ? user.bloodPressure.map(
                  (bp) =>
                    `Sistólica: ${bp.systolic}, Diastólica: ${bp.diastolic} (${formatDate(bp.measurementDate)})`
                )
              : []
          }
        />
        <Section
          title="Contatos de Emergência"
          items={
            user.emergencyContacts
              ? user.emergencyContacts.map(
                  (contact) =>
                    `${contact.contactName} - ${contact.relationship}: ${contact.contactPhone}`
                )
              : []
          }
        />
        <Section
          title="Consultas Recentes"
          items={
            user.recentConsultations
              ? user.recentConsultations.map(
                  (consultation) =>
                    `${consultation.details} (${formatDate(consultation.consultationDate)})`
                )
              : []
          }
        />
        <Section
          title="Exames Recentes"
          items={
            user.recentExams
              ? user.recentExams.map(
                  (exam) =>
                    `${exam.examName}: ${exam.results} (${formatDate(exam.examDate)})`
                )
              : []
          }
        />
        <Section
          title="Recomendações Médicas"
          items={
            user.recommendations
              ? user.recommendations.map(
                  (recommendation) => recommendation.recommendation
                )
              : []
          }
        />
        <Section
          title="Histórico de Vacinação"
          items={
            user.vaccinationHistory
              ? user.vaccinationHistory.map(
                  (vaccine) =>
                    `${vaccine.vaccineName}: ${vaccine.status} - Última dose em ${formatDate(vaccine.lastVaccinationDate)}`
                )
              : []
          }
        />
      </Content>
    </Container>
  );
}
