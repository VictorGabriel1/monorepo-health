import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsPhoneNumber, IsUUID, IsOptional } from 'class-validator';

export class CreateEmergencyContactDto {
  @ApiProperty()
  @IsString()
  contactName: string;

  @ApiProperty()
  @IsPhoneNumber('BR')
  contactPhone: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  relationship?: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}

export class UpdateEmergencyContactDto extends PartialType(
  CreateEmergencyContactDto,
) {}
