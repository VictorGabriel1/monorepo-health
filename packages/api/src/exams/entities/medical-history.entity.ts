import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Entity('medical_history')
export class MedicalHistoryEntity extends BaseEntity {
  @Column({ type: 'text', nullable: true })
  allergies: string;

  @Column({ type: 'text', nullable: true })
  chronicDiseases: string;

  @Column({ type: 'text', nullable: true })
  pastSurgeries: string;

  @ManyToOne(() => UsersEntity, (user) => user.medicalHistory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
