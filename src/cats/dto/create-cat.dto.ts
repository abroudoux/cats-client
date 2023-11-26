import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';

// import { Owner } from '@/cats/models/cat.model';


export class CreateCatDto {

    @IsNotEmpty()
    @IsString()
    readonly name : string;

    @IsNotEmpty()
    @IsString()
    readonly color : string;

    // @IsNotEmpty()
    // @IsEnum(Owner, { message : 'Please select the owner\'s cat' })
    // readonly owner : Owner;
};