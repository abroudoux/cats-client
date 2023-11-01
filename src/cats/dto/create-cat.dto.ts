import { IsEnum, MinLength } from 'class-validator';


export class CreateCatDto {
    @MinLength(3)
    name : string;

    @IsEnum(['black', 'brown'], { message : 'Use correct color' })
    color : 'black' | 'brown';
};