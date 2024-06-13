import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { CurrentMedicationsEntity } from '../entities/current-medications.entity';

@Injectable()
export class CurrentMedicationsRepository {
  constructor(
    @InjectRepository(CurrentMedicationsEntity)
    private readonly currentMedicationsRepository: Repository<CurrentMedicationsEntity>,
  ) {}

  async create(
    currentMedication: DeepPartial<CurrentMedicationsEntity>,
  ): Promise<CurrentMedicationsEntity> {
    return await this.currentMedicationsRepository.save(currentMedication);
  }

  async findById(id: string): Promise<CurrentMedicationsEntity> {
    const currentMedication = await this.currentMedicationsRepository.findOne({
      where: { id },
    });
    if (!currentMedication) {
      throw new NotFoundException(
        `Current medication with ID "${id}" not found.`,
      );
    }
    return currentMedication;
  }

  async update(
    id: string,
    currentMedicationData: DeepPartial<CurrentMedicationsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the current medication exists
    return await this.currentMedicationsRepository.update(
      id,
      currentMedicationData,
    );
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the current medication exists
    await this.currentMedicationsRepository.delete(id);
  }
}
