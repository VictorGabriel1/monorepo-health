import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Entity('blood_pressure')
export class BloodPressureEntity extends BaseEntity {
  @Column({ type: 'date' })
  measurementDate: Date;

  @Column()
  systolic: number;

  @Column()
  diastolic: number;

  @ManyToOne(() => UsersEntity, (user) => user.bloodPressure, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
