import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDoctorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  crm: string;

  @ApiProperty()
  @IsString()
  specialty: string;
}

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
