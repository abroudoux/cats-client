// import { Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';

// import { AuthService } from '@/auth/services/auth.service';
// import { AuthController } from '@/auth/controllers/auth.controller';
// import { UsersSchema } from '@/users/models/user.model';


// @Module({
//     imports: [
//         PassportModule.register({ defaultStrategy: 'jwt' }),
//         JwtModule.registerAsync({
//             inject: [ConfigService],
//             useFactory: (config: ConfigService) => {
//                 return {
//                     secret: config.get<string>('JWT_SECRET'),
//                     signOptions: {
//                         expiresIn: config.get<string | number>('JWT_EXPIRES'),
//                     },
//                 };
//             },
//         }),
//         MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])
//     ],
//     controllers: [AuthController],
//     providers: [AuthService]
// })
// export class AuthModule {}
