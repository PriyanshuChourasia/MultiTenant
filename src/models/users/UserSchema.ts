import mongoose, { Schema } from "mongoose";
import { Gender, IUserSchemaInterface } from "./IUserSchemaInterface";



export const UserSchema: Schema = new Schema<IUserSchemaInterface>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: false,
    },
    password:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        enum: Gender
    }
});