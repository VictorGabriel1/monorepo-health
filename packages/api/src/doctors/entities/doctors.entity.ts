import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { RecentExamsEntity } from 'src/exams/entities/recent-exams.entity';
import { RecommendationsEntity } from 'src/exams/entities/recommendations.entity';
import { MedicalSignaturesEntity } from './medical-signatures.entity';

@Entity('doctors')
export class DoctorsEntity extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 20, unique: true })
  crm: string;

  @Column({ length: 50 })
  specialty: string;

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

  @OneToMany(
    () => MedicalSignaturesEntity,
    (medicalSignatures) => medicalSignatures.doctor,
    {
      eager: true,
      cascade: true,
    },
  )
  medicalSignatures?: MedicalSignaturesEntity[];
}
