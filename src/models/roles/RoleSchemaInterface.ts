import { Schema } from "mongoose";





export interface RoleSchemaInterface{
    name: string;
    applicationId: Schema.Types.ObjectId;
    permissions: Array<string>;
}