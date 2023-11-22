import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/keys';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';


@Module({
    imports: [CatsModule, MongooseModule.forRoot(config.mongoURI), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
