// npm install mongoose --save-dev
import mongoose, { MongooseOptions } from "mongoose";
import { env } from "./env.config";


// const mongooseOptions = {
//     autoIndex:true,
//     // useUnifiedTopology: true,
//     // useFindAndModify: false,
//     // poolSize:10,
//     // bufferMaxEntries: 0,
//     connectTimeoutMS: 10000,
//     socketTimeoutMS: 30000
// };

// const connect = (DB_URL: string) =>{
//   return mongoose.createConnection(DB_URL,mongooseOptions);
// }



// export async function dbConnect(){
//     const db = connect(env.DB_URL);

//     db.on('open',()=>{
//         console.info('Mongo Connection opened');
//     });

//     db.on('error',(err)=>{
//         console.info(`Mongo Connection error ${err}`);
//     });
//     return db;
// }



export async function dbConnect(){
    try{
        await mongoose.connect(env.DB_URL);
        console.log("Connection Successfull");
    }catch(error){
        console.log("Error in connection");
        console.error("Error: ",error)
    }
}