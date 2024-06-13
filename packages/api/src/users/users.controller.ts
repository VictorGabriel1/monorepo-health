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
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dtos/users.dto';
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
import { CreateAddressDto, UpdateAddressDto } from './dtos/addresses.dto';
import {
  CreateEmergencyContactDto,
  UpdateEmergencyContactDto,
} from './dtos/emergency-contacts.dto';
import { LoginUserDto } from './dtos/login.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @ApiOperation({ summary: 'Create User' })
  @ApiCreatedResponse({ description: 'User created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiOkResponse({ description: 'User found' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiParam({ name: 'id', type: 'string', required: true })
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiNoContentResponse({ description: 'User updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'User not found' })
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response,
  ) {
    await this.usersService.updateUser(id, updateUserDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiOkResponse({ description: 'User deleted' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteUser(id);
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiOkResponse({ description: 'Login successful' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.usersService.login(loginUserDto);
  }

  // Address routes
  @Post('addresses')
  @ApiOperation({ summary: 'Create Address for User' })
  @ApiCreatedResponse({ description: 'Address created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Res() response: Response,
  ) {
    await this.usersService.createAddress(createAddressDto);
    return response.status(HttpStatus.CREATED).send('Address created!');
  }

  @Get(':userId/addresses/:addressId')
  @ApiOperation({ summary: 'Get Address by ID for User' })
  @ApiOkResponse({ description: 'Address found' })
  @ApiNotFoundResponse({ description: 'Address not found' })
  @ApiParam({ name: 'userId', type: 'string', required: true })
  @ApiParam({ name: 'addressId', type: 'string', required: true })
  async getAddressById(
    @Param('userId') userId: string,
    @Param('addressId') addressId: string,
  ) {
    return await this.usersService.getAddressById(userId, addressId);
  }

  @Patch('addresses/:addressId')
  @ApiOperation({ summary: 'Update Address for User' })
  @ApiNoContentResponse({ description: 'Address updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Address not found' })
  async updateAddress(
    @Param('addressId') addressId: string,
    @Body() updateAddressDto: UpdateAddressDto,
    @Res() response: Response,
  ) {
    await this.usersService.updateAddress(addressId, updateAddressDto);
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete('addresses/:addressId')
  @ApiOperation({ summary: 'Delete Address for User by ID' })
  @ApiOkResponse({ description: 'Address deleted' })
  @ApiNotFoundResponse({ description: 'Address not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteAddress(@Param('addressId') addressId: string): Promise<void> {
    await this.usersService.deleteAddress(addressId);
  }

  // Emergency contact routes
  @Post('emergency-contacts')
  @ApiOperation({ summary: 'Create Emergency Contact for User' })
  @ApiCreatedResponse({ description: 'Emergency Contact created' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async createEmergencyContact(
    @Body() createEmergencyContactDto: CreateEmergencyContactDto,
    @Res() response: Response,
  ) {
    await this.usersService.createEmergencyContact(createEmergencyContactDto);
    return response
      .status(HttpStatus.CREATED)
      .send('Emergency Contact created!');
  }

  @Get(':userId/emergency-contacts')
  @ApiOperation({ summary: 'Get Emergency Contact by ID for User' })
  @ApiOkResponse({ description: 'Emergency Contact found' })
  @ApiNotFoundResponse({ description: 'Emergency Contact not found' })
  @ApiParam({ name: 'userId', type: 'string', required: true })
  @ApiParam({ name: 'contactId', type: 'string', required: true })
  async getEmergencyContactById(@Param('userId') userId: string) {
    return await this.usersService.getEmergencyContactById(userId);
  }

  @Patch(':userId/emergency-contacts')
  @ApiOperation({ summary: 'Update Emergency Contact for User' })
  @ApiNoContentResponse({ description: 'Emergency Contact updated' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiNotFoundResponse({ description: 'Emergency Contact not found' })
  async updateEmergencyContact(
    @Param('userId') userId: string,
    @Body() updateEmergencyContactDto: UpdateEmergencyContactDto,
    @Res() response: Response,
  ) {
    await this.usersService.updateEmergencyContact(
      userId,
      updateEmergencyContactDto,
    );
    response.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete(':userId/emergency-contacts')
  @ApiOperation({ summary: 'Delete Emergency Contact for User by ID' })
  @ApiOkResponse({ description: 'Emergency Contact deleted' })
  @ApiNotFoundResponse({ description: 'Emergency Contact not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  async deleteEmergencyContact(@Param('userId') userId: string): Promise<void> {
    await this.usersService.deleteEmergencyContact(userId);
  }
}
