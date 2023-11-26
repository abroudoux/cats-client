import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

import { Cat } from '@/cats/models/cat.model';


@Injectable()
export class CatsService {

    constructor(@InjectModel('Cat') private readonly catModel : Model<Cat>) {}

    // async getCats(isAdopted ? : boolean) : Promise<Cat[]> {
    //     const filter = isAdopted !== undefined ? { isAdopted } : {};
    //     return await this.catModel.find(filter);
    // };

    async getCats() : Promise<Cat[]> {
        return await this.catModel.find();
    };

    async getCat(id : string) : Promise<Cat> {

        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Enter a valid id');
        };

        const cat = await this.catModel.findById({ _id : id });

        if (!cat) {
            throw new NotFoundException('Cat not found');
        };

        return cat;
    };

    async createCat(cat : Cat) : Promise<Cat> {
        const newCat = new this.catModel(cat);
        return await newCat.save();
    };

    async deleteCat(id : string) : Promise<Cat> {
        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Enter a valid id');
        };

        const catDeleted = await this.catModel.findByIdAndDelete({ _id: id });

        if (!catDeleted) {
            throw new NotFoundException('Cat not found');
        };

        return catDeleted;
    };

    async updateCat(id : string, cat : Cat) : Promise<Cat> {
        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new BadRequestException('Enter a vlid id');
        };

        const catUpdated = await this.catModel.findByIdAndUpdate({ _id: id });

        if (!catUpdated) {
            throw new NotFoundException('Cat not found');
        };

        return catUpdated;
    };
};
