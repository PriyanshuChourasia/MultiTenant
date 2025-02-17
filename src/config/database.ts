// npm install mongoose --save-dev
import mongoose from "mongoose";
import { env } from "./env.config";



export async function dbConnect(){
    try{
        await mongoose.connect(env.DB_URL);
        console.log("Connection Successfull");
    }catch(error){
        console.log("Error in connection");
        console.error("Error: ",error)
    }
}