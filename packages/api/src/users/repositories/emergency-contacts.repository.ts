import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { EmergencyContactsEntity } from '../entities/emergency-contacts.entity';

@Injectable()
export class EmergencyContactsRepository {
  constructor(
    @InjectRepository(EmergencyContactsEntity)
    private readonly emergencyContactsRepository: Repository<EmergencyContactsEntity>,
  ) {}

  async create(
    emergencyContact: DeepPartial<EmergencyContactsEntity>,
  ): Promise<EmergencyContactsEntity> {
    return await this.emergencyContactsRepository.save(emergencyContact);
  }

  async findById(id: string): Promise<EmergencyContactsEntity> {
    const emergencyContact = await this.emergencyContactsRepository.findOne({
      where: { id },
    });
    if (!emergencyContact) {
      throw new NotFoundException(
        `Emergency contact with ID "${id}" not found.`,
      );
    }
    return emergencyContact;
  }

  async update(
    id: string,
    emergencyContactData: DeepPartial<EmergencyContactsEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the emergency contact exists
    return await this.emergencyContactsRepository.update(
      id,
      emergencyContactData,
    );
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the emergency contact exists
    await this.emergencyContactsRepository.delete(id);
  }
}
