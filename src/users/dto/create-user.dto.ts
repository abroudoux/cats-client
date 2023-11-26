import { IsArray, IsNotEmpty, IsString } from 'class-validator';

import { Cats } from '@/users/models/user.model';


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly name : string;

    // @IsNotEmpty()
    // @IsArray()
    // readonly cats : Cats;
};