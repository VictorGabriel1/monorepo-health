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
  UseInterceptors,
  ClassSerializerInterceptor,
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
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import { LoginDto } from 'src/shared/dto/login.dto';

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

  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({ description: 'Login successful' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async login(@Body() loginDto: LoginDto) {
    return await this.doctorsService.login(loginDto);
  }
}
