import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateVaccinationHistoryDto {
  @ApiProperty()
  @IsString()
  vaccineName: string;

  @ApiProperty()
  @IsDateString()
  lastVaccinationDate: Date;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}

export class UpdateVaccinationHistoryDto extends PartialType(
  CreateVaccinationHistoryDto,
) {}
