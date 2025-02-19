import { Request, Response } from "express";
import { BaseController } from "../BaseController";
import { CreateUserRequestDto } from "@/dtos/request_Dtos/users_dtos/Create_user_dtos";



class UserController extends BaseController{
    public async index(req:Request, res:Response){
        console.log(req.body,"get");
        new Promise((resolve,reject)=>{
            resolve(res.status(200).json({
                "data":"Welcome 200"
            }))
        });
    }

    public async create(req: Request<{},{},CreateUserRequestDto>, res: any){
        console.log(req.body.name,"post");
        new Promise((resolve,reject)=>{
            resolve(res.status(200).json({
                "data":"Welcome POST DATA"
            }))
        });
    }
}




export const  userController = new UserController();