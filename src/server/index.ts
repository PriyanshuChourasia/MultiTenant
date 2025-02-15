import express,{Express, Request, Response} from "express"; // when you will use it first it will give you a warning of 'could not find the declaration file for module express'


const app: Express = express();
const PORT = 3000;

// always write req and res both because in typescript if you forget to write req and written res it will consider res to req and you will be facing errors

app.get('/',(req:Request, res:Response)=>{
    res.status(200).json({
        message:"Server is running smooth"
    });
});



export function loadServer(){
    app.listen(PORT,()=>{
        console.log(`Running at port ${PORT}`);
        console.log(`Application runnning at http://localhost:${PORT}`);
    });
}