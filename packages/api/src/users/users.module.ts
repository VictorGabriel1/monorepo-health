import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { AddressesRepository } from './repositories/addresses.repository';
import { EmergencyContactsRepository } from './repositories/emergency-contacts.repository';
import { UsersEntity } from './entities/users.entity';
import { AddressesEntity } from './entities/addresses.entity';
import { EmergencyContactsEntity } from './entities/emergency-contacts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      AddressesEntity,
      EmergencyContactsEntity,
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository,
    AddressesRepository,
    EmergencyContactsRepository,
  ],
  exports: [UsersService], // Export UsersService if needed in other modules
})
export class UsersModule {}
