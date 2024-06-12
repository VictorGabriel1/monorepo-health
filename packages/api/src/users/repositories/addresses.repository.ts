import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressesEntity } from '../entities/addresses.entity';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AddressesRepository {
  constructor(
    @InjectRepository(AddressesEntity)
    private readonly addressRepository: Repository<AddressesEntity>,
  ) {}

  async create(
    address: DeepPartial<AddressesEntity>,
  ): Promise<AddressesEntity> {
    return await this.addressRepository.save(address);
  }

  async findById(id: string): Promise<AddressesEntity> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }

    return address;
  }

  async delete(id: string): Promise<void> {
    await this.addressRepository.delete(id);
  }

  async update(
    id: string,
    addressData: DeepPartial<AddressesEntity>,
  ): Promise<UpdateResult> {
    const existingAddress = await this.findById(id);
    if (!existingAddress) {
      throw new NotFoundException(`Address with ID "${id}" not found.`);
    }

    return await this.addressRepository.update(id, addressData);
  }
}
