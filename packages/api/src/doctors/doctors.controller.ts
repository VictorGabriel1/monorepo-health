import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dtos/doctors.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { CreateHospitalDto, UpdateHospitalDto } from './dtos/hospitals.dto';
import {
  CreateMedicalSignatureDto,
  UpdateMedicalSignatureDto,
} from './dtos/medical-signatures.dto';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post('/')
  @ApiOperation({ summary: 'Create Doctor' })
  @ApiCreatedResponse({ description: 'Doctor created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createDoctor(
    @Body() createDoctorDto: CreateDoctorDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.createDoctor(createDoctorDto);
    return response.status(HttpStatus.CREATED).send('Doctor created!');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get doctor by ID' })
  @ApiOkResponse({ description: 'Doctor found' })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getDoctorById(@Param('id') id: string) {
    return await this.doctorsService.getDoctorById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update doctor' })
  @ApiNoContentResponse({ description: 'Doctor updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  async updateDoctor(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.updateDoctor(id, updateDoctorDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete doctor by ID' })
  @ApiOkResponse({ description: 'Doctor deleted' })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteDoctor(@Param('id') id: string): Promise<void> {
    await this.doctorsService.deleteDoctor(id);
  }

  // Hospital routes
  @Post('hospitals')
  @ApiOperation({ summary: 'Create Hospital for Doctor' })
  @ApiCreatedResponse({ description: 'Hospital created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createHospital(
    @Body() createHospitalDto: CreateHospitalDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.createHospital(createHospitalDto);
    return response.status(HttpStatus.CREATED).send('Hospital created!');
  }

  @Get('hospitals/:hospitalId')
  @ApiOperation({ summary: 'Get Hospital by ID for Doctor' })
  @ApiOkResponse({ description: 'Hospital found' })
  @ApiNotFoundResponse({ description: 'Hospital not found' })
  @ApiParam({ name: 'hospitalId', type: 'string', required: true })
  async getHospitalById(@Param('hospitalId') hospitalId: string) {
    return await this.doctorsService.getHospitalById(hospitalId);
  }

  @Patch('hospitals/:hospitalId')
  @ApiOperation({ summary: 'Update Hospital for Doctor' })
  @ApiNoContentResponse({ description: 'Hospital updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Hospital not found' })
  async updateHospital(
    @Param('hospitalId') hospitalId: string,
    @Body() updateHospitalDto: UpdateHospitalDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.updateHospital(hospitalId, updateHospitalDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('hospitals/:hospitalId')
  @ApiOperation({ summary: 'Delete Hospital for Doctor by ID' })
  @ApiOkResponse({ description: 'Hospital deleted' })
  @ApiNotFoundResponse({ description: 'Hospital not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteHospital(@Param('hospitalId') hospitalId: string): Promise<void> {
    await this.doctorsService.deleteHospital(hospitalId);
  }

  // Medical signature routes
  @Post('medical-signatures')
  @ApiOperation({ summary: 'Create Medical Signature for Doctor' })
  @ApiCreatedResponse({ description: 'Medical Signature created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createMedicalSignature(
    @Body() createMedicalSignatureDto: CreateMedicalSignatureDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.createMedicalSignature(createMedicalSignatureDto);
    return response
      .status(HttpStatus.CREATED)
      .send('Medical Signature created!');
  }

  @Get('medical-signatures/:signatureId')
  @ApiOperation({ summary: 'Get Medical Signature by ID for Doctor' })
  @ApiOkResponse({ description: 'Medical Signature found' })
  @ApiNotFoundResponse({ description: 'Medical Signature not found' })
  @ApiParam({ name: 'signatureId', type: 'string', required: true })
  async getMedicalSignatureById(@Param('signatureId') signatureId: string) {
    return await this.doctorsService.getMedicalSignatureById(signatureId);
  }

  @Patch('medical-signatures/:signatureId')
  @ApiOperation({ summary: 'Update Medical Signature for Doctor' })
  @ApiNoContentResponse({ description: 'Medical Signature updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Medical Signature not found' })
  async updateMedicalSignature(
    @Param('signatureId') signatureId: string,
    @Body() updateMedicalSignatureDto: UpdateMedicalSignatureDto,
    @Res() response: Response,
  ) {
    await this.doctorsService.updateMedicalSignature(
      signatureId,
      updateMedicalSignatureDto,
    );
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('medical-signatures/:signatureId')
  @ApiOperation({ summary: 'Delete Medical Signature for Doctor by ID' })
  @ApiOkResponse({ description: 'Medical Signature deleted' })
  @ApiNotFoundResponse({ description: 'Medical Signature not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteMedicalSignature(
    @Param('signatureId') signatureId: string,
  ): Promise<void> {
    await this.doctorsService.deleteMedicalSignature(signatureId);
  }
}
