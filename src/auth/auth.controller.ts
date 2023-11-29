import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from '@/auth/auth.service';
import { SignUpDto } from '@/auth/dto/signup.dto';


@Controller('auth')
export class AuthController {

    constructor( private authService : AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto : SignUpDto) : Promise<{ token : string }> {
        return this.authService.signUp(signUpDto)
    };

}
