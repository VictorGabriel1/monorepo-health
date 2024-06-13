import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorsRepository } from './repositories/doctors.repository';
import { HospitalsRepository } from './repositories/hospitals.repository';
import { MedicalSignaturesRepository } from './repositories/medical-signatures.repository';
import { DoctorsEntity } from './entities/doctors.entity';
import { HospitalsEntity } from './entities/hospitals.entity';
import { MedicalSignaturesEntity } from './entities/medical-signatures.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DoctorsEntity,
      HospitalsEntity,
      MedicalSignaturesEntity,
    ]),
  ],
  controllers: [DoctorsController],
  providers: [
    DoctorsService,
    DoctorsRepository,
    HospitalsRepository,
    MedicalSignaturesRepository,
  ],
  exports: [DoctorsService], // Export DoctorsService if needed in other modules
})
export class DoctorsModule {}
