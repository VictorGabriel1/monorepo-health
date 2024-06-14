import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { DoctorsEntity } from 'src/doctors/entities/doctors.entity';

@Entity('blood_pressure')
export class BloodPressureEntity extends BaseEntity {
  @Column({ name: 'measurement_date', type: 'date' })
  measurementDate: Date;

  @Column()
  systolic: number;

  @Column()
  diastolic: number;

  @Column({ name: 'user_id' })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.bloodPressure, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: UsersEntity;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @ManyToOne(() => DoctorsEntity, (doctor) => doctor.bloodPressure)
  @JoinColumn({ name: 'doctor_id' })
  doctor?: DoctorsEntity;
}
