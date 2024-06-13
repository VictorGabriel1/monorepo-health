import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateCurrentMedicationsDto {
  @ApiProperty()
  @IsString()
  medication: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}

export class UpdateCurrentMedicationsDto extends PartialType(
  CreateCurrentMedicationsDto,
) {}
