import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressesEntity } from './addresses.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ name: 'phone_number', length: 20 })
  phoneNumber: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @OneToMany(() => AddressesEntity, (addresses) => addresses.user, {
    eager: true,
    cascade: true,
  })
  addresses?: AddressesEntity[];
}
