import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { VaccinationHistoryEntity } from '../entities/vaccination-history.entity';

@Injectable()
export class VaccinationHistoryRepository {
  constructor(
    @InjectRepository(VaccinationHistoryEntity)
    private readonly vaccinationHistoryRepository: Repository<VaccinationHistoryEntity>,
  ) {}

  async create(
    vaccinationHistory: DeepPartial<VaccinationHistoryEntity>,
  ): Promise<VaccinationHistoryEntity> {
    return await this.vaccinationHistoryRepository.save(vaccinationHistory);
  }

  async findById(id: string): Promise<VaccinationHistoryEntity> {
    const vaccinationHistory = await this.vaccinationHistoryRepository.findOne({
      where: { id },
    });
    if (!vaccinationHistory) {
      throw new NotFoundException(
        `Vaccination history with ID "${id}" not found.`,
      );
    }
    return vaccinationHistory;
  }

  async update(
    id: string,
    vaccinationHistoryData: DeepPartial<VaccinationHistoryEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the vaccination history exists
    return await this.vaccinationHistoryRepository.update(
      id,
      vaccinationHistoryData,
    );
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the vaccination history exists
    await this.vaccinationHistoryRepository.delete(id);
  }
}
