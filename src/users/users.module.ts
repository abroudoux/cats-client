import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from '@/users/controllers/users.controller';
import { UsersService } from '@/users/services/users.service';
import { UsersSchema } from '@/users/models/user.model';



@Module({
    imports: [MongooseModule.forFeature([{ name : 'User', schema : UsersSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})


export class UsersModule {}
