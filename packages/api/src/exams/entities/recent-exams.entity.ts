import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';

@Entity('recent_exams')
export class RecentExamsEntity extends BaseEntity {
  @Column({ name: 'exam_name', length: 100 })
  examName: string;

  @Column({ name: 'exam_date', type: 'date' })
  examDate: Date;

  @Column({ type: 'text' })
  results: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.recentExams, {
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
