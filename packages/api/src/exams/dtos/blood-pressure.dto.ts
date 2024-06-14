import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDateString, IsInt, IsUUID } from 'class-validator';

export class CreateBloodPressureDto {
  @ApiProperty()
  @IsDateString()
  measurementDate: Date;

  @ApiProperty()
  @IsInt()
  systolic: number;

  @ApiProperty()
  @IsInt()
  diastolic: number;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;
}

export class UpdateBloodPressureDto extends PartialType(
  CreateBloodPressureDto,
) {}
