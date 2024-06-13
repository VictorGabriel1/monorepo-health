import { Entity, Column, OneToMany } from 'typeorm';
import { AddressesEntity } from './addresses.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { MedicalHistoryEntity } from 'src/exams/entities/medical-history.entity';
import { CurrentMedicationsEntity } from 'src/exams/entities/current-medications.entity';
import { VaccinationHistoryEntity } from 'src/exams/entities/vaccination-history.entity';
import { RecentConsultationsEntity } from 'src/exams/entities/recent-consultations.entity';
import { BloodPressureEntity } from 'src/exams/entities/blood-pressure.entity';
import { RecentExamsEntity } from 'src/exams/entities/recent-exams.entity';
import { RecommendationsEntity } from 'src/exams/entities/recommendations.entity';
import { MedicalSignaturesEntity } from 'src/doctors/entities/medical-signatures.entity';
import { EmergencyContactsEntity } from './emergency-contacts.entity';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ name: 'phone_number', length: 11 })
  phoneNumber: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ name: 'health_plan' })
  healthPlan: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @OneToMany(() => AddressesEntity, (addresses) => addresses.user, {
    eager: true,
    cascade: true,
  })
  addresses?: AddressesEntity[];

  @OneToMany(
    () => MedicalHistoryEntity,
    (medicalHistory) => medicalHistory.user,
    {
      eager: true,
      cascade: true,
    },
  )
  medicalHistory?: MedicalHistoryEntity[];

  @OneToMany(
    () => CurrentMedicationsEntity,
    (currentMedications) => currentMedications.user,
    {
      eager: true,
      cascade: true,
    },
  )
  currentMedications?: CurrentMedicationsEntity[];

  @OneToMany(
    () => VaccinationHistoryEntity,
    (vaccinationHistory) => vaccinationHistory.user,
    {
      eager: true,
      cascade: true,
    },
  )
  vaccinationHistory?: VaccinationHistoryEntity[];

  @OneToMany(
    () => RecentConsultationsEntity,
    (recentConsultations) => recentConsultations.user,
    {
      eager: true,
      cascade: true,
    },
  )
  recentConsultations?: RecentConsultationsEntity[];

  @OneToMany(() => BloodPressureEntity, (bloodPressure) => bloodPressure.user, {
    eager: true,
    cascade: true,
  })
  bloodPressure?: BloodPressureEntity[];

  @OneToMany(() => RecentExamsEntity, (recentExams) => recentExams.user, {
    eager: true,
    cascade: true,
  })
  recentExams?: RecentExamsEntity[];

  @OneToMany(
    () => RecommendationsEntity,
    (recommendations) => recommendations.user,
    {
      eager: true,
      cascade: true,
    },
  )
  recommendations?: RecommendationsEntity[];

  @OneToMany(
    () => MedicalSignaturesEntity,
    (medicalSignatures) => medicalSignatures.user,
    {
      eager: true,
      cascade: true,
    },
  )
  medicalSignatures?: MedicalSignaturesEntity[];

  @OneToMany(
    () => EmergencyContactsEntity,
    (emergencyContacts) => emergencyContacts.user,
    {
      eager: true,
      cascade: true,
    },
  )
  emergencyContacts?: EmergencyContactsEntity[];
}
