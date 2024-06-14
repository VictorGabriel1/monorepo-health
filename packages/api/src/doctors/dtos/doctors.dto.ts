import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateDoctorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsStrongPassword()
  password: string;

  @ApiProperty()
  @IsString()
  crm: string;

  @ApiProperty()
  @IsString()
  specialty: string;
}

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
