import mongoose from "mongoose";
import { RoleSchema } from "./RoleSchema";




export const Role = mongoose.model('Roles',RoleSchema);