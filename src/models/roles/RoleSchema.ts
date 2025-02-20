import { Schema } from "mongoose";
import { RoleSchemaInterface } from "./RoleSchemaInterface";



export const RoleSchema:Schema = new Schema<RoleSchemaInterface>({
    name:{
        type: String,
        required: true,
        unique: true
    },
    permissions:{
        type: [String],
        required: true
    },
    applicationId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Applications'
    }
});