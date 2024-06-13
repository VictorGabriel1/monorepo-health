import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial, UpdateResult } from 'typeorm';
import { AddressesEntity } from '../entities/addresses.entity';

@Injectable()
export class AddressesRepository {
  constructor(
    @InjectRepository(AddressesEntity)
    private readonly addressesRepository: Repository<AddressesEntity>,
  ) {}

  async create(
    address: DeepPartial<AddressesEntity>,
  ): Promise<AddressesEntity> {
    return await this.addressesRepository.save(address);
  }

  async findById(id: string): Promise<AddressesEntity> {
    const address = await this.addressesRepository.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException(`Address with ID "${id}" not found.`);
    }
    return address;
  }

  async update(
    id: string,
    addressData: DeepPartial<AddressesEntity>,
  ): Promise<UpdateResult> {
    await this.findById(id); // Check if the address exists
    return await this.addressesRepository.update(id, addressData);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); // Check if the address exists
    await this.addressesRepository.delete(id);
  }
}
