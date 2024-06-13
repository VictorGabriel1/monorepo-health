import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateMedicalSignatureDto {
  @ApiProperty()
  @IsString()
  crm: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;
}

export class UpdateMedicalSignatureDto extends PartialType(
  CreateMedicalSignatureDto,
) {}
