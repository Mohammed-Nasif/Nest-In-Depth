// npm i @nestjs/mapped-types => To Clone dto

import { PartialType } from '@nestjs/mapped-types'; // Optional
import { CreateUserDto } from './create-user.dto';

// Same As createUserDto but optional Props
export class UpdateUserDto extends PartialType(CreateUserDto) {}
