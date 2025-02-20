import mongoose from "mongoose";
import { ApplicationSchema } from "./ApplicationSchema";



export const Application = mongoose.model('Applications',ApplicationSchema);