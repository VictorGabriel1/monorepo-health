import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersEntity } from './entities/users.entity';
import { AddressesEntity } from './entities/addresses.entity';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { AddressesRepository } from './repositories/addresses.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, AddressesEntity])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, AddressesRepository],
})
export class UsersModule {}
