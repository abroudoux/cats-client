import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import config from '@/config/keys';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CatsModule } from '@/cats/cats.module';
import { UsersModule } from '@/users/users.module';
import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';
import { AuthModule } from '@/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Module({
    imports: [
        CatsModule, 
        MongooseModule.forRoot(config.mongoURI), 
        UsersModule, 
        AuthModule, 
        JwtModule.registerAsync({
            inject: [ConfigService]
        })
    ],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {}
