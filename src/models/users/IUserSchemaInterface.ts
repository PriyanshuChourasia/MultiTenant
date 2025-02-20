import { Schema } from "mongoose";


export enum Gender{
    male = "male",
    fem = "female",
    oth = "others"
}


export interface IUserSchemaInterface{
    name:string;
    email: string;
    username: string;
    applicationId: Schema.Types.ObjectId;
    password: string;
    phoneNumber: string;
    // address: string;
    // gender: Gender;
}