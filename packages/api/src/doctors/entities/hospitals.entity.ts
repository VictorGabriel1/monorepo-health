import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { RecentExamsEntity } from 'src/exams/entities/recent-exams.entity';

@Entity('hospitals')
export class HospitalsEntity extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 200 })
  address: string;

  @Column({ length: 20 })
  phone: string;

  @OneToMany(() => RecentExamsEntity, (recentExams) => recentExams.hospital, {
    eager: true,
    cascade: true,
  })
  recentExams?: RecentExamsEntity[];
}
