import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';
import { HospitalsEntity } from 'src/doctors/entities/hospitals.entity';

@Entity('recent_exams')
export class RecentExamsEntity extends BaseEntity {
  @Column({ length: 100 })
  examName: string;

  @Column({ type: 'date' })
  examDate: Date;

  @Column({ type: 'text' })
  results: string;

  @ManyToOne(() => UsersEntity, (user) => user.recentExams, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @ManyToOne(() => DoctorsEntity, (doctor) => doctor.recentExams)
  @JoinColumn({ name: 'doctor_id' })
  doctor: DoctorsEntity;

  @ManyToOne(() => HospitalsEntity, (hospital) => hospital.recentExams)
  @JoinColumn({ name: 'hospital_id' })
  hospital: HospitalsEntity;
}
