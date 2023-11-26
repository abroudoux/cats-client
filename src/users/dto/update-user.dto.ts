import  { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsOptional, IsString } from 'class-validator';

import { CreateUserDto } from '@/users/dto/create-user.dto';
import { Cats } from '@/users/models/user.model';


export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    @IsString()
    readonly name : string;

    // @IsOptional()
    // @IsArray()
    // readonly cats : Cats;
}