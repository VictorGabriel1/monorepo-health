import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodPressureRepository } from './repositories/blood-pressure.repository';
import { CurrentMedicationsRepository } from './repositories/current-medications.repository';
import { MedicalHistoryRepository } from './repositories/medical-history.repository';
import { RecentConsultationsRepository } from './repositories/recent-consultations.repository';
import { RecentExamsRepository } from './repositories/recent-exams.repository';
import { RecommendationsRepository } from './repositories/recommendations.repository';
import { VaccinationHistoryRepository } from './repositories/vaccination-history.repository';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BloodPressureRepository,
      CurrentMedicationsRepository,
      MedicalHistoryRepository,
      RecentConsultationsRepository,
      RecentExamsRepository,
      RecommendationsRepository,
      VaccinationHistoryRepository,
    ]),
  ],
  controllers: [ExamsController],
  providers: [ExamsService],
  exports: [ExamsService],
})
export class ExamsModule {}
