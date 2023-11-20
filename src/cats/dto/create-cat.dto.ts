import { IsBoolean, IsNotEmpty, IsString } from "class-validator";


export class CreateCatDto {

    @IsString()
    readonly id : string;

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