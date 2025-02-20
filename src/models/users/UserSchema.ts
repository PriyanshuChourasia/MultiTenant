import {  Schema } from "mongoose";
import { IUserSchemaInterface } from "./IUserSchemaInterface";



export const UserSchema: Schema = new Schema<IUserSchemaInterface>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: false,
        unique: true
    },
    applicationId:{
        type: Schema.Types.ObjectId,
        ref:'Applications'
    },
    phoneNumber:{
        type: String,
        required: false,
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});