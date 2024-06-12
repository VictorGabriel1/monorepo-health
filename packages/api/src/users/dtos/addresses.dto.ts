import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  streetName: string;

  @ApiProperty()
  @IsString()
  streetNumber: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  streetComplement?: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  zip: string;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
