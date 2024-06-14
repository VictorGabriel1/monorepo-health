import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { AddressesRepository } from './repositories/addresses.repository';
import { EmergencyContactsRepository } from './repositories/emergency-contacts.repository';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
import { CreateAddressDto, UpdateAddressDto } from './dtos/addresses.dto';
import {
  CreateEmergencyContactDto,
  UpdateEmergencyContactDto,
} from './dtos/emergency-contacts.dto';
import { UsersEntity } from './entities/users.entity';
import { AddressesEntity } from './entities/addresses.entity';
import { EmergencyContactsEntity } from './entities/emergency-contacts.entity';
import { UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../shared/dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly addressRepository: AddressesRepository,
    private readonly emergencyContactRepository: EmergencyContactsRepository,
  ) {}

  // Users services
  async createUser(createUserDto: CreateUserDto): Promise<UsersEntity> {
    try {
      // Hash password before saving
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

  async getUserByEmail(email: string): Promise<UsersEntity> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email "${email}" not found.`);
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

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Buscar usuário pelo email
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  // Addresses services
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
    if (!address) {
      throw new NotFoundException(`Address with ID "${id}" not found.`);
    }
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

  // Emergency Contacts services
  async createEmergencyContact(
    createEmergencyContactDto: CreateEmergencyContactDto,
  ): Promise<EmergencyContactsEntity> {
    try {
      const emergencyContact = await this.emergencyContactRepository.create(
        createEmergencyContactDto,
      );
      return emergencyContact;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getEmergencyContactById(id: string): Promise<EmergencyContactsEntity> {
    const emergencyContact = await this.emergencyContactRepository.findById(id);
    if (!emergencyContact) {
      throw new NotFoundException(
        `Emergency Contact with ID "${id}" not found.`,
      );
    }
    return emergencyContact;
  }

  async updateEmergencyContact(
    id: string,
    updateEmergencyContactDto: UpdateEmergencyContactDto,
  ): Promise<UpdateResult> {
    try {
      const emergencyContact = await this.emergencyContactRepository.update(
        id,
        updateEmergencyContactDto,
      );
      return emergencyContact;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteEmergencyContact(id: string): Promise<void> {
    try {
      await this.emergencyContactRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
