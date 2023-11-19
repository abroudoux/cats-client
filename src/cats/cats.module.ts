import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsController } from './controllers/cats.controller';
import { CatsService } from './services/cats.service';
import { CatsSchema } from './schemas/cat.schema';



@Module({
    imports: [MongooseModule.forFeature([{ name : 'Cat', schema : CatsSchema }])],
    controllers: [CatsController],
    providers: [CatsService]
})


export class CatsModule {}
