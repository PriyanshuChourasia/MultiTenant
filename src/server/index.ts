import express,{Express} from "express"; // when you will use it first it will give you a warning of 'could not find the declaration file for module express'


const app: Express = express();
const PORT = 3000;


export function loadServer(){
    app.listen(PORT,()=>{
        console.log(`Running at port ${PORT}`);
    });
    
}