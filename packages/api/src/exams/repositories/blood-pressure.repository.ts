import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { BloodPressureEntity } from '../entities/blood-pressure.entity';

@Injectable()
export class BloodPressureRepository {
  constructor(
    @InjectRepository(BloodPressureEntity)
    private readonly bloodPressureRepository: Repository<BloodPressureEntity>,
  ) {}

  async create(
    bloodPressure: DeepPartial<BloodPressureEntity>,
  ): Promise<BloodPressureEntity> {
    return await this.bloodPressureRepository.save(bloodPressure);
  }

  async findById(id: string): Promise<BloodPressureEntity> {
    const bloodPressure = await this.bloodPressureRepository.findOne({
      where: { id },
    });
    if (!bloodPressure) {
      throw new NotFoundException(
        `Blood pressure record with ID "${id}" not found.`,
      );
    }
    return bloodPressure;
  }

  async update(
    id: string,
    bloodPressureData: DeepPartial<BloodPressureEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the blood pressure record exists
    return await this.bloodPressureRepository.update(id, bloodPressureData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the blood pressure record exists
    await this.bloodPressureRepository.delete(id);
  }
}
