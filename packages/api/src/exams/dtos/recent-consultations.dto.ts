import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateRecentConsultationsDto {
  @ApiProperty()
  @IsDateString()
  consultationDate: Date;

  @ApiProperty()
  @IsString()
  details: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;
}

export class UpdateRecentConsultationsDto extends PartialType(
  CreateRecentConsultationsDto,
) {}
