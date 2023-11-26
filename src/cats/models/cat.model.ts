import * as mongoose from 'mongoose';


// export enum Owner {
//     ARTHUR = 'Arthur',
//     SACHA = 'Sacha',
//     ACHILLE = 'Achille',
// };

export const CatsSchema = new mongoose.Schema({
    name : { type : String, required : true },
    color : { type : String, required : true },
    // owner : { type : Owner, required : true },
});

export interface Cat {
    name : string,
    color : string,
    // owner : string,
};