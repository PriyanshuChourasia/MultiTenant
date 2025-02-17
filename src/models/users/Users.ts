import mongoose from "mongoose";
import { UserSchema } from "./UserSchema";


export const Users = mongoose.model('Users',UserSchema);