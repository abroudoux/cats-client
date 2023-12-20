import * as mongoose from 'mongoose';


export const CatsSchema = new mongoose.Schema({
    name : { type : String, required : true },
    color : { type : String, required : true },
});

export interface Cat {
    name : string,
    color : string,
};