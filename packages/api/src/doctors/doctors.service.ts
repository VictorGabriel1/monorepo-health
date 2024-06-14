import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { DoctorsRepository } from './repositories/doctors.repository';
import { UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/shared/dto/login.dto';
import { DoctorsEntity } from './entities/doctors.entity';
import { CreateDoctorDto, UpdateDoctorDto } from './dtos/doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(private readonly doctorsRepository: DoctorsRepository) {}

  async createDoctor(createDoctorDto: CreateDoctorDto): Promise<DoctorsEntity> {
    try {
      // Hash password before saving
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(
        createDoctorDto.password,
        saltRounds,
      );
      createDoctorDto.password = hashedPassword;

      const doctors = await this.doctorsRepository.create(createDoctorDto);
      return doctors;
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

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Buscar usuário pelo email
    const doctor = await this.doctorsRepository.findByEmail(email);
    if (!doctor) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return doctor;
  }
}
