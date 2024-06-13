import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { MedicalSignaturesEntity } from '../entities/medical-signatures.entity';

@Injectable()
export class MedicalSignaturesRepository {
  constructor(
    @InjectRepository(MedicalSignaturesEntity)
    private readonly medicalSignaturesRepository: Repository<MedicalSignaturesEntity>,
  ) {}

  async create(
    medicalSignature: DeepPartial<MedicalSignaturesEntity>,
  ): Promise<MedicalSignaturesEntity> {
    return await this.medicalSignaturesRepository.save(medicalSignature);
  }

  async findById(id: string): Promise<MedicalSignaturesEntity> {
    const medicalSignature = await this.medicalSignaturesRepository.findOne({
      where: { id },
    });
    if (!medicalSignature) {
      throw new NotFoundException(
        `Medical signature with ID "${id}" not found.`,
      );
    }
    return medicalSignature;
  }

  async update(
    id: string,
    medicalSignatureData: DeepPartial<MedicalSignaturesEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the medical signature exists
    return await this.medicalSignaturesRepository.update(
      id,
      medicalSignatureData,
    );
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the medical signature exists
    await this.medicalSignaturesRepository.delete(id);
  }
}
