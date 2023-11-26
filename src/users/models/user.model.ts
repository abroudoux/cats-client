import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export enum Cats {
    FANETTE = 'Fanette',
    FELIX = 'Félix',
    ABEL = 'Abel',
    MILO = 'Milo',
};

export const UsersSchema = new mongoose.Schema({
    name : { type : String, required : true },
    // cats : { type : Array<Cats>, required : true },
});

export interface User {
    name : string,
    // cats : Array<string>,
};
