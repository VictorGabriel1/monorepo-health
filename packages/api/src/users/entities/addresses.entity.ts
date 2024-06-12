import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { UsersEntity } from './users.entity';

@Entity('addresses')
export class AddressesEntity extends BaseEntity {
  @Column({ name: 'street_name' })
  streetName: string;

  @Column({ name: 'street_number' })
  streetNumber: string;

  @Column({ name: 'street_complement', nullable: true })
  streetComplement: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 10 })
  zip: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UsersEntity, (users) => users.addresses, {
    onDelete: 'CASCADE',
  })
  user: UsersEntity;
}
