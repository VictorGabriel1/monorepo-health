import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorsRepository } from './repositories/doctors.repository';
import { DoctorsEntity } from './entities/doctors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorsEntity])],
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorsRepository],
  exports: [DoctorsService], // Export DoctorsService if needed in other modules
})
export class DoctorsModule {}
