import { Request, Response } from "express";
import { BaseController } from "../BaseController";
import { Http } from "@status/codes";
import { CreateApplicationDto } from "@/dtos/request_Dtos/application_dtos/create_application_dtos";
import { Application } from "@/models/applications/Applications";






class ApplicationController extends BaseController{
    public async index(req: Request, res: Response): Promise<any> {
        return new Promise((resolve,reject)=>{
            resolve(
                res.status(Http.Ok).json({
                    "data":"This is Application"
                })
            )
        });
    }

    public async create(req: Request<{},{},CreateApplicationDto>, res: Response): Promise<any> {
        const application = Application.create()
        return new Promise((resolve,reject)=>{

        })   
    }
}




export const applicationController = new ApplicationController();