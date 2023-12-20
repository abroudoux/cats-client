import { Model } from 'mongoose';
import { Cat } from '@/cats/models/cat.model';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    getCats(): Promise<Cat[]>;
    getCat(id: string): Promise<Cat>;
    createCat(cat: Cat): Promise<Cat>;
    deleteCat(id: string): Promise<Cat | null>;
    updateCat(id: string, cat: Cat): Promise<Cat>;
}
