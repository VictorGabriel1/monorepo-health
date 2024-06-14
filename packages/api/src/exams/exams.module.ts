import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsService } from './exams.service';
import { BloodPressureRepository } from './repositories/blood-pressure.repository';
import { CurrentMedicationsRepository } from './repositories/current-medications.repository';
import { MedicalHistoryRepository } from './repositories/medical-history.repository';
import { RecentConsultationsRepository } from './repositories/recent-consultations.repository';
import { RecentExamsRepository } from './repositories/recent-exams.repository';
import { RecommendationsRepository } from './repositories/recommendations.repository';
import { VaccinationHistoryRepository } from './repositories/vaccination-history.repository';
import { ExamsController } from './exams.controller';
import { BloodPressureEntity } from './entities/blood-pressure.entity';
import { CurrentMedicationsEntity } from './entities/current-medications.entity';
import { MedicalHistoryEntity } from './entities/medical-history.entity';
import { RecentConsultationsEntity } from './entities/recent-consultations.entity';
import { RecentExamsEntity } from './entities/recent-exams.entity';
import { VaccinationHistoryEntity } from './entities/vaccination-history.entity';
import { RecommendationsEntity } from './entities/recommendations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BloodPressureEntity,
      CurrentMedicationsEntity,
      MedicalHistoryEntity,
      RecentConsultationsEntity,
      RecentExamsEntity,
      RecommendationsEntity,
      VaccinationHistoryEntity,
    ]),
  ],
  controllers: [ExamsController],
  providers: [
    ExamsService,
    BloodPressureRepository,
    CurrentMedicationsRepository,
    MedicalHistoryRepository,
    RecentConsultationsRepository,
    RecentExamsRepository,
    RecommendationsRepository,
    VaccinationHistoryRepository,
  ],
  exports: [ExamsService], // Export DoctorsService if needed in other modules
})
export class ExamsModule {}
