import  { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';

import { CreateCatDto } from '@/cats/dto/create-cat.dto';
// import { Owner } from '@/cats/models/cat.model';


export class UpdateCatDto extends PartialType(CreateCatDto) {

    @IsOptional()
    @IsString()
    readonly name : string;

    @IsOptional()
    @IsString()
    readonly color : string;

    @IsOptional()
    @IsBoolean()
    readonly isAdopted : boolean;

    // @IsOptional()
    // @IsEnum(Owner, { message : 'Please select the owner\'s cat' })
    // readonly owner : Owner;
};