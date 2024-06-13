import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateRecentExamsDto {
  @ApiProperty()
  @IsString()
  examName: string;

  @ApiProperty()
  @IsDateString()
  examDate: Date;

  @ApiProperty()
  @IsString()
  results: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;

  @ApiProperty()
  @IsUUID()
  hospitalId: string;
}

export class UpdateRecentExamsDto extends PartialType(CreateRecentExamsDto) {}
