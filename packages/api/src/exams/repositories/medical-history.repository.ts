import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { MedicalHistoryEntity } from '../entities/medical-history.entity';

@Injectable()
export class MedicalHistoryRepository {
  constructor(
    @InjectRepository(MedicalHistoryEntity)
    private readonly medicalHistoryRepository: Repository<MedicalHistoryEntity>,
  ) {}

  async create(
    medicalHistory: DeepPartial<MedicalHistoryEntity>,
  ): Promise<MedicalHistoryEntity> {
    return await this.medicalHistoryRepository.save(medicalHistory);
  }

  async findById(id: string): Promise<MedicalHistoryEntity> {
    const medicalHistory = await this.medicalHistoryRepository.findOne({
      where: { id },
    });
    if (!medicalHistory) {
      throw new NotFoundException(`Medical history with ID "${id}" not found.`);
    }
    return medicalHistory;
  }

  async update(
    id: string,
    medicalHistoryData: DeepPartial<MedicalHistoryEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the medical history exists
    return await this.medicalHistoryRepository.update(id, medicalHistoryData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the medical history exists
    await this.medicalHistoryRepository.delete(id);
  }
}
