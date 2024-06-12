import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { AddressesRepository } from './repositories/addresses.repository';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
import { UsersEntity } from './entities/users.entity';
import { AddressesEntity } from './entities/addresses.entity';
import { CreateAddressDto, UpdateAddressDto } from './dtos/addresses.dto';
import { UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly addressRepository: AddressesRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UsersEntity> {
    try {
      createUserDto.password = '1';

      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        saltRounds,
      );
      createUserDto.password = hashedPassword;

      const user = await this.userRepository.create(createUserDto);
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getUserById(id: string): Promise<UsersEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }
    return user;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    try {
      const user = await this.userRepository.update(id, updateUserDto);

      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async createAddress(
    createAddressDto: CreateAddressDto,
  ): Promise<AddressesEntity> {
    try {
      const address = await this.addressRepository.create(createAddressDto);
      return address;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAddressById(id: string): Promise<AddressesEntity> {
    const address = await this.addressRepository.findById(id);

    return address;
  }

  async updateAddress(
    id: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<UpdateResult> {
    try {
      const address = await this.addressRepository.update(id, updateAddressDto);
      return address;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteAddress(id: string): Promise<void> {
    try {
      await this.addressRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
