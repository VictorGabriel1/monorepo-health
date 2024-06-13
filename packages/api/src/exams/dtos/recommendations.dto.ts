import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateRecommendationsDto {
  @ApiProperty()
  @IsString()
  recommendation: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  doctorId: string;
}

export class UpdateRecommendationsDto extends PartialType(
  CreateRecommendationsDto,
) {}
