import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

import { User } from '@/auth/schemas/user.schema';



@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel : Model<User>, private jwtService : JwtService) {}

    async signUp(signUpdDto) : Promise<{ token : string }> {
        const { name, email, password } = signUpdDto

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({ name, email, password : hashedPassword });

        const token = this.jwtService.sign({ id : user._id });

        return { token }
    };

};
