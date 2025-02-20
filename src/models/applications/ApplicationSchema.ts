import { Schema } from "mongoose";
import { ApplicationSchemaInterface } from "./interfaces/Application_Schema_Interface";





export const ApplicationSchema: Schema = new Schema<ApplicationSchemaInterface>({
    name:{
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})