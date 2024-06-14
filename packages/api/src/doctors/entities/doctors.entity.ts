import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { RecentExamsEntity } from 'src/exams/entities/recent-exams.entity';
import { RecentConsultationsEntity } from 'src/exams/entities/recent-consultations.entity';
import { RecommendationsEntity } from 'src/exams/entities/recommendations.entity';
import { Exclude } from 'class-transformer';
import { BloodPressureEntity } from 'src/exams/entities/blood-pressure.entity';
import { CurrentMedicationsEntity } from 'src/exams/entities/current-medications.entity';
import { MedicalHistoryEntity } from 'src/exams/entities/medical-history.entity';
import { VaccinationHistoryEntity } from 'src/exams/entities/vaccination-history.entity';

@Entity('doctors')
export class DoctorsEntity extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ length: 10, unique: true })
  crm: string;

  @Column({ length: 50 })
  specialty: string;

  @OneToMany(
    () => MedicalHistoryEntity,
    (medicalHistory) => medicalHistory.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  medicalHistory?: MedicalHistoryEntity[];

  @OneToMany(
    () => CurrentMedicationsEntity,
    (currentMedications) => currentMedications.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  currentMedications?: CurrentMedicationsEntity[];

  @OneToMany(
    () => VaccinationHistoryEntity,
    (vaccinationHistory) => vaccinationHistory.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  vaccinationHistory?: VaccinationHistoryEntity[];

  @OneToMany(
    () => RecentConsultationsEntity,
    (recentConsultations) => recentConsultations.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  recentConsultations?: RecentConsultationsEntity[];

  @OneToMany(
    () => BloodPressureEntity,
    (bloodPressure) => bloodPressure.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  bloodPressure?: BloodPressureEntity[];

  @OneToMany(() => RecentExamsEntity, (recentExams) => recentExams.doctor, {
    eager: true,
    cascade: true,
  })
  recentExams?: RecentExamsEntity[];

  @OneToMany(
    () => RecommendationsEntity,
    (recommendations) => recommendations.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  recommendations?: RecommendationsEntity[];
}
