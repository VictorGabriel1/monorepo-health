import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';

@Entity('vaccination_history')
export class VaccinationHistoryEntity extends BaseEntity {
  @Column({ name: 'vaccine_name', length: 100 })
  vaccineName: string;

  @Column({ name: 'last_vaccination_date', type: 'date' })
  lastVaccinationDate: Date;

  @Column({ length: 20 })
  status: string;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.vaccinationHistory, {
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
