import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

@Entity('current_medications')
export class CurrentMedicationsEntity extends BaseEntity {
  @Column({ type: 'text' })
  medication: string;

  @ManyToOne(() => UsersEntity, (user) => user.currentMedications, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
