import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';
import { UserSchema } from '@/auth/schemas/user.schema';



@Module({
    imports: [
        PassportModule.register({  defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => {
                return {
                    secret: config.get<string>('JWT_SCRET'),
                    signOptions: {
                        expiresIn : config.get<string | number>('JWT_EXPIRES')
                    },
                };
            },
        }),
        MongooseModule.forFeature([{ name : 'User', schema : UserSchema }])
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
