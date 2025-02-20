import { Schema } from "mongoose";




export interface UserToRoleSchemaInterface{
    applicationId: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    roleId: Schema.Types.ObjectId;
}