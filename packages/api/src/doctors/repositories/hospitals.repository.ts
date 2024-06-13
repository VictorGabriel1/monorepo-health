import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { HospitalsEntity } from '../entities/hospitals.entity';

@Injectable()
export class HospitalsRepository {
  constructor(
    @InjectRepository(HospitalsEntity)
    private readonly hospitalsRepository: Repository<HospitalsEntity>,
  ) {}

  async create(
    hospital: DeepPartial<HospitalsEntity>,
  ): Promise<HospitalsEntity> {
    return await this.hospitalsRepository.save(hospital);
  }

  async findById(id: string): Promise<HospitalsEntity> {
    const hospital = await this.hospitalsRepository.findOne({ where: { id } });
    if (!hospital) {
      throw new NotFoundException(`Hospital with ID "${id}" not found.`);
    }
    return hospital;
  }

  async update(
    id: string,
    hospitalData: DeepPartial<HospitalsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the hospital exists
    return await this.hospitalsRepository.update(id, hospitalData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the hospital exists
    await this.hospitalsRepository.delete(id);
  }
}
