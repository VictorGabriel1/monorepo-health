import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from './users.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

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

  @ManyToOne(() => UsersEntity, (user) => user.addresses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;
}
