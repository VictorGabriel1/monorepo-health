import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DoctorsEntity } from './doctors.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Entity('medical_signatures')
export class MedicalSignaturesEntity extends BaseEntity {
  @Column({ length: 50 })
  crm: string;

  @ManyToOne(() => UsersEntity, (user) => user.medicalSignatures, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @ManyToOne(() => DoctorsEntity, (doctor) => doctor.medicalSignatures)
  @JoinColumn({ name: 'doctor_id' })
  doctor: DoctorsEntity;
}
