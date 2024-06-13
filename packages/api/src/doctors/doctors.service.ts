import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DoctorsRepository } from './repositories/doctors.repository';
import { HospitalsRepository } from './repositories/hospitals.repository';
import { MedicalSignaturesRepository } from './repositories/medical-signatures.repository';
import { CreateDoctorDto, UpdateDoctorDto } from './dtos/doctors.dto';
import { DoctorsEntity } from './entities/doctors.entity';
import { HospitalsEntity } from './entities/hospitals.entity';
import { MedicalSignaturesEntity } from './entities/medical-signatures.entity';
import { CreateHospitalDto, UpdateHospitalDto } from './dtos/hospitals.dto';
import {
  CreateMedicalSignatureDto,
  UpdateMedicalSignatureDto,
} from './dtos/medical-signatures.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class DoctorsService {
  constructor(
    private readonly doctorsRepository: DoctorsRepository,
    private readonly hospitalsRepository: HospitalsRepository,
    private readonly medicalSignaturesRepository: MedicalSignaturesRepository,
  ) {}

  async createDoctor(createDoctorDto: CreateDoctorDto): Promise<DoctorsEntity> {
    try {
      // Implementação da lógica de criação de médico
      const doctor = await this.doctorsRepository.create(createDoctorDto);
      return doctor;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getDoctorById(id: string): Promise<DoctorsEntity> {
    const doctor = await this.doctorsRepository.findById(id);
    if (!doctor) {
      throw new NotFoundException(`Doctor with ID "${id}" not found.`);
    }
    return doctor;
  }

  async updateDoctor(
    id: string,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<UpdateResult> {
    try {
      const doctor = await this.doctorsRepository.update(id, updateDoctorDto);
      return doctor;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteDoctor(id: string): Promise<void> {
    try {
      await this.doctorsRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createHospital(
    createHospitalDto: CreateHospitalDto,
  ): Promise<HospitalsEntity> {
    try {
      // Implementação da lógica de criação de hospital para médico
      const hospital = await this.hospitalsRepository.create(createHospitalDto);
      return hospital;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getHospitalById(hospitalId: string): Promise<HospitalsEntity> {
    const hospital = await this.hospitalsRepository.findById(hospitalId);
    if (!hospital) {
      throw new NotFoundException(
        `Hospital with ID "${hospitalId}" not found.`,
      );
    }
    return hospital;
  }

  async updateHospital(
    hospitalId: string,
    updateHospitalDto: UpdateHospitalDto,
  ): Promise<UpdateResult> {
    try {
      const hospital = await this.hospitalsRepository.update(
        hospitalId,
        updateHospitalDto,
      );
      return hospital;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteHospital(hospitalId: string): Promise<void> {
    try {
      await this.hospitalsRepository.delete(hospitalId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createMedicalSignature(
    createMedicalSignatureDto: CreateMedicalSignatureDto,
  ): Promise<MedicalSignaturesEntity> {
    try {
      // Implementação da lógica de criação de assinatura médica para médico
      const medicalSignature = await this.medicalSignaturesRepository.create(
        createMedicalSignatureDto,
      );
      return medicalSignature;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getMedicalSignatureById(
    signatureId: string,
  ): Promise<MedicalSignaturesEntity> {
    const medicalSignature =
      await this.medicalSignaturesRepository.findById(signatureId);
    if (!medicalSignature) {
      throw new NotFoundException(
        `Medical Signature with ID "${signatureId}" not found.`,
      );
    }
    return medicalSignature;
  }

  async updateMedicalSignature(
    signatureId: string,
    updateMedicalSignatureDto: UpdateMedicalSignatureDto,
  ): Promise<UpdateResult> {
    try {
      const medicalSignature = await this.medicalSignaturesRepository.update(
        signatureId,
        updateMedicalSignatureDto,
      );
      return medicalSignature;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteMedicalSignature(signatureId: string): Promise<void> {
    try {
      await this.medicalSignaturesRepository.delete(signatureId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
