import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsPostalCode } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  streetName: string;

  @ApiProperty()
  @IsString()
  streetNumber: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
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
  @IsPostalCode('BR')
  zip: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
