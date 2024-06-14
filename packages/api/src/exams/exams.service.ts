import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BloodPressureEntity } from './entities/blood-pressure.entity';
import { CurrentMedicationsEntity } from './entities/current-medications.entity';
import { MedicalHistoryEntity } from './entities/medical-history.entity';
import { RecentConsultationsEntity } from './entities/recent-consultations.entity';
import { RecentExamsEntity } from './entities/recent-exams.entity';
import { RecommendationsEntity } from './entities/recommendations.entity';
import { VaccinationHistoryEntity } from './entities/vaccination-history.entity';
import {
  CreateBloodPressureDto,
  UpdateBloodPressureDto,
} from './dtos/blood-pressure.dto';
import {
  CreateCurrentMedicationsDto,
  UpdateCurrentMedicationsDto,
} from './dtos/current-medications.dto';
import {
  CreateMedicalHistoryDto,
  UpdateMedicalHistoryDto,
} from './dtos/medical-history.dto';
import {
  CreateRecentConsultationsDto,
  UpdateRecentConsultationsDto,
} from './dtos/recent-consultations.dto';
import {
  CreateRecentExamsDto,
  UpdateRecentExamsDto,
} from './dtos/recent-exams.dto';
import {
  CreateRecommendationsDto,
  UpdateRecommendationsDto,
} from './dtos/recommendations.dto';
import {
  CreateVaccinationHistoryDto,
  UpdateVaccinationHistoryDto,
} from './dtos/vaccination-history.dto';
import { UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BloodPressureRepository } from './repositories/blood-pressure.repository';
import { CurrentMedicationsRepository } from './repositories/current-medications.repository';
import { MedicalHistoryRepository } from './repositories/medical-history.repository';
import { RecentConsultationsRepository } from './repositories/recent-consultations.repository';
import { RecentExamsRepository } from './repositories/recent-exams.repository';
import { RecommendationsRepository } from './repositories/recommendations.repository';
import { VaccinationHistoryRepository } from './repositories/vaccination-history.repository';

@Injectable()
export class ExamsService {
  constructor(
    private readonly bloodPressureRepository: BloodPressureRepository,
    private readonly currentMedicationsRepository: CurrentMedicationsRepository,
    private readonly medicalHistoryRepository: MedicalHistoryRepository,
    private readonly recentConsultationsRepository: RecentConsultationsRepository,
    private readonly recentExamsRepository: RecentExamsRepository,
    private readonly recommendationsRepository: RecommendationsRepository,
    private readonly vaccinationHistoryRepository: VaccinationHistoryRepository,
  ) {}

  // Blood Pressure services
  async createBloodPressure(
    createBloodPressureDto: CreateBloodPressureDto,
  ): Promise<BloodPressureEntity> {
    try {
      const bloodPressure = await this.bloodPressureRepository.create(
        createBloodPressureDto,
      );
      return bloodPressure;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getBloodPressureById(id: string): Promise<BloodPressureEntity> {
    const bloodPressure = await this.bloodPressureRepository.findById(id);
    if (!bloodPressure) {
      throw new NotFoundException(`Blood Pressure with ID "${id}" not found.`);
    }
    return bloodPressure;
  }

  async updateBloodPressure(
    id: string,
    updateBloodPressureDto: UpdateBloodPressureDto,
  ): Promise<UpdateResult> {
    try {
      const bloodPressure = await this.bloodPressureRepository.update(
        id,
        updateBloodPressureDto,
      );
      return bloodPressure;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteBloodPressure(id: string): Promise<void> {
    try {
      await this.bloodPressureRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Current Medications services
  async createCurrentMedications(
    createCurrentMedicationsDto: CreateCurrentMedicationsDto,
  ): Promise<CurrentMedicationsEntity> {
    try {
      const currentMedications = await this.currentMedicationsRepository.create(
        createCurrentMedicationsDto,
      );
      return currentMedications;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getCurrentMedicationsById(
    id: string,
  ): Promise<CurrentMedicationsEntity> {
    const currentMedications =
      await this.currentMedicationsRepository.findById(id);
    if (!currentMedications) {
      throw new NotFoundException(
        `Current Medications with ID "${id}" not found.`,
      );
    }
    return currentMedications;
  }

  async updateCurrentMedications(
    id: string,
    updateCurrentMedicationsDto: UpdateCurrentMedicationsDto,
  ): Promise<UpdateResult> {
    try {
      const currentMedications = await this.currentMedicationsRepository.update(
        id,
        updateCurrentMedicationsDto,
      );
      return currentMedications;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteCurrentMedications(id: string): Promise<void> {
    try {
      await this.currentMedicationsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Medical History services
  async createMedicalHistory(
    createMedicalHistoryDto: CreateMedicalHistoryDto,
  ): Promise<MedicalHistoryEntity> {
    try {
      const medicalHistory = await this.medicalHistoryRepository.create(
        createMedicalHistoryDto,
      );
      return medicalHistory;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getMedicalHistoryById(id: string): Promise<MedicalHistoryEntity> {
    const medicalHistory = await this.medicalHistoryRepository.findById(id);
    if (!medicalHistory) {
      throw new NotFoundException(`Medical History with ID "${id}" not found.`);
    }
    return medicalHistory;
  }

  async updateMedicalHistory(
    id: string,
    updateMedicalHistoryDto: UpdateMedicalHistoryDto,
  ): Promise<UpdateResult> {
    try {
      const medicalHistory = await this.medicalHistoryRepository.update(
        id,
        updateMedicalHistoryDto,
      );
      return medicalHistory;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteMedicalHistory(id: string): Promise<void> {
    try {
      await this.medicalHistoryRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Recent Consultations services
  async createRecentConsultations(
    createRecentConsultationsDto: CreateRecentConsultationsDto,
  ): Promise<RecentConsultationsEntity> {
    try {
      const recentConsultations =
        await this.recentConsultationsRepository.create(
          createRecentConsultationsDto,
        );
      return recentConsultations;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getRecentConsultationsById(
    id: string,
  ): Promise<RecentConsultationsEntity> {
    const recentConsultations =
      await this.recentConsultationsRepository.findById(id);
    if (!recentConsultations) {
      throw new NotFoundException(
        `Recent Consultations with ID "${id}" not found.`,
      );
    }
    return recentConsultations;
  }

  async updateRecentConsultations(
    id: string,
    updateRecentConsultationsDto: UpdateRecentConsultationsDto,
  ): Promise<UpdateResult> {
    try {
      const recentConsultations =
        await this.recentConsultationsRepository.update(
          id,
          updateRecentConsultationsDto,
        );
      return recentConsultations;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteRecentConsultations(id: string): Promise<void> {
    try {
      await this.recentConsultationsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Recent Exams services
  async createRecentExams(
    createRecentExamsDto: CreateRecentExamsDto,
  ): Promise<RecentExamsEntity> {
    try {
      const recentExams =
        await this.recentExamsRepository.create(createRecentExamsDto);
      return recentExams;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getRecentExamsById(id: string): Promise<RecentExamsEntity> {
    const recentExams = await this.recentExamsRepository.findById(id);
    if (!recentExams) {
      throw new NotFoundException(`Recent Exams with ID "${id}" not found.`);
    }
    return recentExams;
  }

  async updateRecentExams(
    id: string,
    updateRecentExamsDto: UpdateRecentExamsDto,
  ): Promise<UpdateResult> {
    try {
      const recentExams = await this.recentExamsRepository.update(
        id,
        updateRecentExamsDto,
      );
      return recentExams;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteRecentExams(id: string): Promise<void> {
    try {
      await this.recentExamsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Recommendations services
  async createRecommendations(
    createRecommendationsDto: CreateRecommendationsDto,
  ): Promise<RecommendationsEntity> {
    try {
      const recommendations = await this.recommendationsRepository.create(
        createRecommendationsDto,
      );
      return recommendations;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getRecommendationsById(id: string): Promise<RecommendationsEntity> {
    const recommendations = await this.recommendationsRepository.findById(id);
    if (!recommendations) {
      throw new NotFoundException(`Recommendations with ID "${id}" not found.`);
    }
    return recommendations;
  }

  async updateRecommendations(
    id: string,
    updateRecommendationsDto: UpdateRecommendationsDto,
  ): Promise<UpdateResult> {
    try {
      const recommendations = await this.recommendationsRepository.update(
        id,
        updateRecommendationsDto,
      );
      return recommendations;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteRecommendations(id: string): Promise<void> {
    try {
      await this.recommendationsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Vaccination History services
  async createVaccinationHistory(
    createVaccinationHistoryDto: CreateVaccinationHistoryDto,
  ): Promise<VaccinationHistoryEntity> {
    try {
      const vaccinationHistory = await this.vaccinationHistoryRepository.create(
        createVaccinationHistoryDto,
      );
      return vaccinationHistory;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getVaccinationHistoryById(
    id: string,
  ): Promise<VaccinationHistoryEntity> {
    const vaccinationHistory =
      await this.vaccinationHistoryRepository.findById(id);
    if (!vaccinationHistory) {
      throw new NotFoundException(
        `Vaccination History with ID "${id}" not found.`,
      );
    }
    return vaccinationHistory;
  }

  async updateVaccinationHistory(
    id: string,
    updateVaccinationHistoryDto: UpdateVaccinationHistoryDto,
  ): Promise<UpdateResult> {
    try {
      const vaccinationHistory = await this.vaccinationHistoryRepository.update(
        id,
        updateVaccinationHistoryDto,
      );
      return vaccinationHistory;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteVaccinationHistory(id: string): Promise<void> {
    try {
      await this.vaccinationHistoryRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
