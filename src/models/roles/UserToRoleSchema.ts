import { Schema } from "mongoose";
import { UserToRoleSchemaInterface } from "./UserToRoleSchemaInterface";





export const UserToRoleSchema: Schema = new Schema<UserToRoleSchemaInterface>({
    applicationId:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    roleId:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
    }
})