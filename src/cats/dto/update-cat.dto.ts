import  { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

import { CreateCatDto } from '@/cats/dto/create-cat.dto';


export class UpdateCatDto extends PartialType(CreateCatDto) {

    @IsNotEmpty()
    @IsString()
    readonly name : string;

    @IsNotEmpty()
    @IsString()
    readonly color : string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isAdopted : boolean;
};