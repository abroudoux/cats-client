import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '@/users/models/user.model';


@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel : Model<User>) {}

    async getUsers(name : string) : Promise<User[]> {
        return await this.userModel.find();
    };

    async getUser(id : string) : Promise<User> {
        const user = await this.userModel.findById({ _id : id });

        if (!user) {
            throw new NotFoundException('User not found');
        };

        return user;
    };

    async createUser(user : User) : Promise<User> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    };

    async deleteUser(id : string) : Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    };

    async updateUser(id : string, user : User) : Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    };
};
