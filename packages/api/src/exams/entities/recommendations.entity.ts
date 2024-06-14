import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';

@Entity('recommendations')
export class RecommendationsEntity extends BaseEntity {
  @Column({ type: 'text' })
  recommendation: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.recommendations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: UsersEntity;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @ManyToOne(() => DoctorsEntity, (doctor) => doctor.recentExams)
  @JoinColumn({ name: 'doctor_id' })
  doctor: DoctorsEntity;
}
