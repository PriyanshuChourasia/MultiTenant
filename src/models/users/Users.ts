import mongoose from "mongoose";
import { UserSchema } from "./UserSchema";


export const User = mongoose.model('Users',UserSchema);