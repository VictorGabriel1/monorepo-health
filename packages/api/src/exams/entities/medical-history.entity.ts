import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';

@Entity('medical_history')
export class MedicalHistoryEntity extends BaseEntity {
  @Column({ type: 'text', nullable: true })
  allergies: string;

  @Column({ name: 'chronic_diseases', type: 'text', nullable: true })
  chronicDiseases: string;

  @Column({ name: 'past_surgeries', type: 'text', nullable: true })
  pastSurgeries: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.medicalHistory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: UsersEntity;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @ManyToOne(() => DoctorsEntity, (doctor) => doctor)
  @JoinColumn({ name: 'doctor_id' })
  doctor?: DoctorsEntity;
}
