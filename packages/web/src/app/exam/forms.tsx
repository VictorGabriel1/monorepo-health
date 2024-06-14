"use client";

import React, { useEffect, useState } from "react";
import { Content } from "./styles";
import ExamForms from "@/components/formsExams";
import { schemas } from "../../components/formsExams/schema";
import Input from "@/components/default/input";
import { redirect } from "next/navigation";

export default function Forms({ session }: { session: string | undefined }) {
  const [userEmail, setUserEmail] = useState<string>("john.doe@example.com");

  if (!session) {
    return redirect("/signin");
  }

  return (
    <Content>
      <Input
        label="E-mail do paciente"
        type="email"
        onChange={(e) => setUserEmail(e.currentTarget.value)}
        value={userEmail}
      />

      <ExamForms
        schema={schemas.bloodPressure}
        endpoint="blood-pressure"
        userEmail={userEmail}
        title="Pressão Sanguínea"
        doctorId={session}
      />
      <ExamForms
        schema={schemas.currentMedications}
        endpoint="current-medications"
        userEmail={userEmail}
        doctorId={session}
        title="Medicamentos Atuais"
      />
      <ExamForms
        schema={schemas.medicalHistory}
        endpoint="medical-history"
        userEmail={userEmail}
        doctorId={session}
        title="Histórico Médico"
      />
      <ExamForms
        schema={schemas.recentConsultations}
        endpoint="recent-consultations"
        userEmail={userEmail}
        doctorId={session}
        title="Consultas Recentes"
      />
      <ExamForms
        schema={schemas.recentExams}
        endpoint="recent-exams"
        userEmail={userEmail}
        doctorId={session}
        title="Exames Recentes"
      />
      <ExamForms
        schema={schemas.recommendations}
        endpoint="recommendations"
        userEmail={userEmail}
        doctorId={session}
        title="Recomendações"
      />
      <ExamForms
        schema={schemas.vaccinationHistory}
        endpoint="vaccination-history"
        userEmail={userEmail}
        doctorId={session}
        title="Histórico de Vacinação"
      />
    </Content>
  );
}
