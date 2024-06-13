import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsPhoneNumber } from 'class-validator';

export class CreateHospitalDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsPhoneNumber('BR')
  phone: string;
}

export class UpdateHospitalDto extends PartialType(CreateHospitalDto) {}
