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
  password: string;
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
