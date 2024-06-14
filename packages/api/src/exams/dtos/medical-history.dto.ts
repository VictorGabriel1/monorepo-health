import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateMedicalHistoryDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  allergies?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  chronicDiseases?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  pastSurgeries?: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;
}

export class UpdateMedicalHistoryDto extends PartialType(
  CreateMedicalHistoryDto,
) {}
