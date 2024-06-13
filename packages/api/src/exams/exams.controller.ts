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
import { ExamsService } from './exams.service';
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
import {
  CreateBloodPressureDto,
  UpdateBloodPressureDto,
} from './dtos/blood-pressure.dto';
import {
  CreateCurrentMedicationsDto,
  UpdateCurrentMedicationsDto,
} from './dtos/current-medications.dto';
import {
  CreateMedicalHistoryDto,
  UpdateMedicalHistoryDto,
} from './dtos/medical-history.dto';
import {
  CreateRecentConsultationsDto,
  UpdateRecentConsultationsDto,
} from './dtos/recent-consultations.dto';
import {
  CreateRecentExamsDto,
  UpdateRecentExamsDto,
} from './dtos/recent-exams.dto';
import {
  CreateRecommendationsDto,
  UpdateRecommendationsDto,
} from './dtos/recommendations.dto';
import {
  CreateVaccinationHistoryDto,
  UpdateVaccinationHistoryDto,
} from './dtos/vaccination-history.dto';

@ApiTags('Exams')
@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  // Blood Pressure routes
  @Post('/blood-pressure')
  @ApiOperation({ summary: 'Create Blood Pressure' })
  @ApiCreatedResponse({ description: 'Blood Pressure created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createBloodPressure(
    @Body() createBloodPressureDto: CreateBloodPressureDto,
    @Res() response: Response,
  ) {
    await this.examsService.createBloodPressure(createBloodPressureDto);
    return response.status(HttpStatus.CREATED).send('Blood Pressure created!');
  }

  @Get('/blood-pressure/:id')
  @ApiOperation({ summary: 'Get Blood Pressure by ID' })
  @ApiOkResponse({ description: 'Blood Pressure found' })
  @ApiNotFoundResponse({ description: 'Blood Pressure not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getBloodPressureById(@Param('id') id: string) {
    return await this.examsService.getBloodPressureById(id);
  }

  @Patch('/blood-pressure/:id')
  @ApiOperation({ summary: 'Update Blood Pressure' })
  @ApiNoContentResponse({ description: 'Blood Pressure updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Blood Pressure not found' })
  async updateBloodPressure(
    @Param('id') id: string,
    @Body() updateBloodPressureDto: UpdateBloodPressureDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateBloodPressure(id, updateBloodPressureDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/blood-pressure/:id')
  @ApiOperation({ summary: 'Delete Blood Pressure by ID' })
  @ApiOkResponse({ description: 'Blood Pressure deleted' })
  @ApiNotFoundResponse({ description: 'Blood Pressure not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteBloodPressure(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteBloodPressure(id);
  }

  // Current Medications routes
  @Post('/current-medications')
  @ApiOperation({ summary: 'Create Current Medications' })
  @ApiCreatedResponse({ description: 'Current Medications created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createCurrentMedications(
    @Body() createCurrentMedicationsDto: CreateCurrentMedicationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.createCurrentMedications(
      createCurrentMedicationsDto,
    );
    return response
      .status(HttpStatus.CREATED)
      .send('Current Medications created!');
  }

  @Get('/current-medications/:id')
  @ApiOperation({ summary: 'Get Current Medications by ID' })
  @ApiOkResponse({ description: 'Current Medications found' })
  @ApiNotFoundResponse({ description: 'Current Medications not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getCurrentMedicationsById(@Param('id') id: string) {
    return await this.examsService.getCurrentMedicationsById(id);
  }

  @Patch('/current-medications/:id')
  @ApiOperation({ summary: 'Update Current Medications' })
  @ApiNoContentResponse({ description: 'Current Medications updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Current Medications not found' })
  async updateCurrentMedications(
    @Param('id') id: string,
    @Body() updateCurrentMedicationsDto: UpdateCurrentMedicationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateCurrentMedications(
      id,
      updateCurrentMedicationsDto,
    );
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/current-medications/:id')
  @ApiOperation({ summary: 'Delete Current Medications by ID' })
  @ApiOkResponse({ description: 'Current Medications deleted' })
  @ApiNotFoundResponse({ description: 'Current Medications not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteCurrentMedications(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteCurrentMedications(id);
  }

  // Medical History routes
  @Post('/medical-history')
  @ApiOperation({ summary: 'Create Medical History' })
  @ApiCreatedResponse({ description: 'Medical History created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createMedicalHistory(
    @Body() createMedicalHistoryDto: CreateMedicalHistoryDto,
    @Res() response: Response,
  ) {
    await this.examsService.createMedicalHistory(createMedicalHistoryDto);
    return response.status(HttpStatus.CREATED).send('Medical History created!');
  }

  @Get('/medical-history/:id')
  @ApiOperation({ summary: 'Get Medical History by ID' })
  @ApiOkResponse({ description: 'Medical History found' })
  @ApiNotFoundResponse({ description: 'Medical History not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getMedicalHistoryById(@Param('id') id: string) {
    return await this.examsService.getMedicalHistoryById(id);
  }

  @Patch('/medical-history/:id')
  @ApiOperation({ summary: 'Update Medical History' })
  @ApiNoContentResponse({ description: 'Medical History updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Medical History not found' })
  async updateMedicalHistory(
    @Param('id') id: string,
    @Body() updateMedicalHistoryDto: UpdateMedicalHistoryDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateMedicalHistory(id, updateMedicalHistoryDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/medical-history/:id')
  @ApiOperation({ summary: 'Delete Medical History by ID' })
  @ApiOkResponse({ description: 'Medical History deleted' })
  @ApiNotFoundResponse({ description: 'Medical History not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteMedicalHistory(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteMedicalHistory(id);
  }

  // Recent Consultations routes
  @Post('/recent-consultations')
  @ApiOperation({ summary: 'Create Recent Consultations' })
  @ApiCreatedResponse({ description: 'Recent Consultations created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createRecentConsultations(
    @Body() createRecentConsultationsDto: CreateRecentConsultationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.createRecentConsultations(
      createRecentConsultationsDto,
    );
    return response
      .status(HttpStatus.CREATED)
      .send('Recent Consultations created!');
  }

  @Get('/recent-consultations/:id')
  @ApiOperation({ summary: 'Get Recent Consultations by ID' })
  @ApiOkResponse({ description: 'Recent Consultations found' })
  @ApiNotFoundResponse({ description: 'Recent Consultations not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getRecentConsultationsById(@Param('id') id: string) {
    return await this.examsService.getRecentConsultationsById(id);
  }

  @Patch('/recent-consultations/:id')
  @ApiOperation({ summary: 'Update Recent Consultations' })
  @ApiNoContentResponse({ description: 'Recent Consultations updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Recent Consultations not found' })
  async updateRecentConsultations(
    @Param('id') id: string,
    @Body() updateRecentConsultationsDto: UpdateRecentConsultationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateRecentConsultations(
      id,
      updateRecentConsultationsDto,
    );
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/recent-consultations/:id')
  @ApiOperation({ summary: 'Delete Recent Consultations by ID' })
  @ApiOkResponse({ description: 'Recent Consultations deleted' })
  @ApiNotFoundResponse({ description: 'Recent Consultations not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteRecentConsultations(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteRecentConsultations(id);
  }

  // Recent Exams routes
  @Post('/recent-exams')
  @ApiOperation({ summary: 'Create Recent Exams' })
  @ApiCreatedResponse({ description: 'Recent Exams created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createRecentExams(
    @Body() createRecentExamsDto: CreateRecentExamsDto,
    @Res() response: Response,
  ) {
    await this.examsService.createRecentExams(createRecentExamsDto);
    return response.status(HttpStatus.CREATED).send('Recent Exams created!');
  }

  @Get('/recent-exams/:id')
  @ApiOperation({ summary: 'Get Recent Exams by ID' })
  @ApiOkResponse({ description: 'Recent Exams found' })
  @ApiNotFoundResponse({ description: 'Recent Exams not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getRecentExamsById(@Param('id') id: string) {
    return await this.examsService.getRecentExamsById(id);
  }

  @Patch('/recent-exams/:id')
  @ApiOperation({ summary: 'Update Recent Exams' })
  @ApiNoContentResponse({ description: 'Recent Exams updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Recent Exams not found' })
  async updateRecentExams(
    @Param('id') id: string,
    @Body() updateRecentExamsDto: UpdateRecentExamsDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateRecentExams(id, updateRecentExamsDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/recent-exams/:id')
  @ApiOperation({ summary: 'Delete Recent Exams by ID' })
  @ApiOkResponse({ description: 'Recent Exams deleted' })
  @ApiNotFoundResponse({ description: 'Recent Exams not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteRecentExams(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteRecentExams(id);
  }

  // Recommendations routes
  @Post('/recommendations')
  @ApiOperation({ summary: 'Create Recommendations' })
  @ApiCreatedResponse({ description: 'Recommendations created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createRecommendations(
    @Body() createRecommendationsDto: CreateRecommendationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.createRecommendations(createRecommendationsDto);
    return response.status(HttpStatus.CREATED).send('Recommendations created!');
  }

  @Get('/recommendations/:id')
  @ApiOperation({ summary: 'Get Recommendations by ID' })
  @ApiOkResponse({ description: 'Recommendations found' })
  @ApiNotFoundResponse({ description: 'Recommendations not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getRecommendationsById(@Param('id') id: string) {
    return await this.examsService.getRecommendationsById(id);
  }

  @Patch('/recommendations/:id')
  @ApiOperation({ summary: 'Update Recommendations' })
  @ApiNoContentResponse({ description: 'Recommendations updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Recommendations not found' })
  async updateRecommendations(
    @Param('id') id: string,
    @Body() updateRecommendationsDto: UpdateRecommendationsDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateRecommendations(id, updateRecommendationsDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/recommendations/:id')
  @ApiOperation({ summary: 'Delete Recommendations by ID' })
  @ApiOkResponse({ description: 'Recommendations deleted' })
  @ApiNotFoundResponse({ description: 'Recommendations not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteRecommendations(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteRecommendations(id);
  }

  // Vaccination History routes
  @Post('/vaccination-history')
  @ApiOperation({ summary: 'Create Vaccination History' })
  @ApiCreatedResponse({ description: 'Vaccination History created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createVaccinationHistory(
    @Body() createVaccinationHistoryDto: CreateVaccinationHistoryDto,
    @Res() response: Response,
  ) {
    await this.examsService.createVaccinationHistory(
      createVaccinationHistoryDto,
    );
    return response
      .status(HttpStatus.CREATED)
      .send('Vaccination History created!');
  }

  @Get('/vaccination-history/:id')
  @ApiOperation({ summary: 'Get Vaccination History by ID' })
  @ApiOkResponse({ description: 'Vaccination History found' })
  @ApiNotFoundResponse({ description: 'Vaccination History not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getVaccinationHistoryById(@Param('id') id: string) {
    return await this.examsService.getVaccinationHistoryById(id);
  }

  @Patch('/vaccination-history/:id')
  @ApiOperation({ summary: 'Update Vaccination History' })
  @ApiNoContentResponse({ description: 'Vaccination History updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Vaccination History not found' })
  async updateVaccinationHistory(
    @Param('id') id: string,
    @Body() updateVaccinationHistoryDto: UpdateVaccinationHistoryDto,
    @Res() response: Response,
  ) {
    await this.examsService.updateVaccinationHistory(
      id,
      updateVaccinationHistoryDto,
    );
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('/vaccination-history/:id')
  @ApiOperation({ summary: 'Delete Vaccination History by ID' })
  @ApiOkResponse({ description: 'Vaccination History deleted' })
  @ApiNotFoundResponse({ description: 'Vaccination History not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteVaccinationHistory(@Param('id') id: string): Promise<void> {
    await this.examsService.deleteVaccinationHistory(id);
  }
}
