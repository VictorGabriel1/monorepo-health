import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from './users.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity('emergency_contacts')
export class EmergencyContactsEntity extends BaseEntity {
  @Column({ length: 100 })
  contactName: string;

  @Column({ length: 20 })
  contactPhone: string;

  @Column({ length: 50, nullable: true })
  relationship: string;

  @ManyToOne(() => UsersEntity, (user) => user.emergencyContacts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
