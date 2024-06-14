"use client";

import React, { useState, useEffect } from "react";
import Section from "@/components/section";
import formatDate from "@/utils/formatDate"; // Certifique-se de criar a função formatDate em utils
import { Box, Content } from "./styles";
import Input from "@/components/default/input";
import api from "@/services/api";
import { DefButton } from "@/components/default/button/styles";
import DefaultButton from "@/components/default/button";

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address extends BaseEntity {
  streetName: string;
  streetNumber: string;
  streetComplement: string;
  district: string;
  city: string;
  state: string;
  zip: string;
}

export interface MedicalHistory extends BaseEntity {
  allergies: string | null;
  chronicDiseases: string | null;
  pastSurgeries: string;
}

export interface CurrentMedication extends BaseEntity {
  medication: string | null;
  dosage: string | null;
  frequency: string | null;
  startDate: Date | null;
}

export interface BloodPressure extends BaseEntity {
  systolic: number;
  diastolic: number;
  measurementDate: Date;
}

export interface RecentConsultation extends BaseEntity {
  consultationDate: Date;
  details: string;
}

export interface RecentExam extends BaseEntity {
  examDate: Date;
  examName: string;
  results: string;
}

export interface Vaccination extends BaseEntity {
  vaccineName: string;
  lastVaccinationDate: Date;
  status: string;
}

export interface EmergencyContact extends BaseEntity {
  contactName: string;
  contactPhone: string;
  relationship: string;
}

export interface Recommendation extends BaseEntity {
  recommendation: string;
}

export interface MedicalSignature extends BaseEntity {
  crm: string;
}

export interface UsersEntity extends BaseEntity {
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  healthPlan: string;
  birthdate: Date;
  addresses?: Address[];
  medicalHistory?: MedicalHistory[];
  currentMedications?: CurrentMedication[];
  bloodPressure?: BloodPressure[];
  recentConsultations?: RecentConsultation[];
  recentExams?: RecentExam[];
  vaccinationHistory?: Vaccination[];
  emergencyContacts?: EmergencyContact[];
  recommendations?: Recommendation[];
  medicalSignatures?: MedicalSignature[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<UsersEntity>();
  const [userEmail, setUserEmail] = useState<string>("john.doe@example.com");

  async function fetchUser(email: string) {
    api
      .get(`/users/email/${email}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("Não encontrado!"));
  }

  if (!user) {
    return (
      <Content>
        <Input
          label="E-mail do paciente"
          type="email"
          onChange={(e) => setUserEmail(e.currentTarget.value)}
          value={userEmail}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchUser(userEmail);
            }
          }}
        />
        <DefButton onClick={() => fetchUser(userEmail)}>Buscar</DefButton>
      </Content>
    );
  }

  return (
    <Content>
      <Box>
        <span>{user.name}</span>
        <Section
          title="Informações Pessoais"
          items={[
            `Email: ${user.email}`,
            `Telefone: ${user.phoneNumber}`,
            `CPF: ${user.cpf}`,
            `Plano de Saúde: ${user.healthPlan}`,
            `Data de Nascimento: ${formatDate(user.birthdate)}`,
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
              ? user.medicalHistory.map((history) => [
                  `Doenças Crônicas: ${history.chronicDiseases}`,
                  `Cirurgias Passadas: ${history.pastSurgeries}`,
                ])
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
        <DefaultButton onClick={() => setUser(undefined)}>
          Buscar outro
        </DefaultButton>
      </Box>
    </Content>
  );
}
