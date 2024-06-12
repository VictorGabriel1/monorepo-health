import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async create(user: DeepPartial<UsersEntity>): Promise<UsersEntity> {
    return await this.usersRepository.save(user);
  }

  async findById(id: string): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }

    return user;
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async update(
    id: string,
    userData: DeepPartial<UsersEntity>,
  ): Promise<UpdateResult> {
    const existingUser = await this.findById(id);
    if (!existingUser) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }

    return await this.usersRepository.update(id, userData);
  }
}
