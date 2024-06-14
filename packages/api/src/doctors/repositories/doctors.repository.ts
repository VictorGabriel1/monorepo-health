import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { DoctorsEntity } from '../entities/doctors.entity';

@Injectable()
export class DoctorsRepository {
  constructor(
    @InjectRepository(DoctorsEntity)
    private readonly doctorsRepository: Repository<DoctorsEntity>,
  ) {}

  async create(doctor: DeepPartial<DoctorsEntity>): Promise<DoctorsEntity> {
    return await this.doctorsRepository.save(doctor);
  }

  async findById(id: string): Promise<DoctorsEntity> {
    const doctor = await this.doctorsRepository.findOne({ where: { id } });
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID "${id}" not found.`);
    }
    return doctor;
  }

  async findByEmail(email: string): Promise<DoctorsEntity | undefined> {
    return await this.doctorsRepository.findOne({ where: { email } });
  }

  async update(
    id: string,
    doctorData: DeepPartial<DoctorsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the doctor exists
    return await this.doctorsRepository.update(id, doctorData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the doctor exists
    await this.doctorsRepository.delete(id);
  }
}
