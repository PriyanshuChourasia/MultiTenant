import { CreateUserRequestDto } from '@/dtos/request_Dtos/users_dtos/Create_user_dtos';
import {Http} from '@status/codes';
import { NextFunction, Request, Response } from 'express';
import {z, ZodError} from "zod";


export function validateRequest(schema:z.ZodObject<any,any>){
    return(req: Request, res: Response, next: NextFunction) =>{
        try{
            schema.parse(req.body);
            next();
        }catch(error){
            if(error instanceof ZodError){
                const errorMessages = error.errors.map((issue:any)=>(
                    `${issue.path.join(',')} is ${issue.message}`
                ))

                res.status(Http.BadRequest).json({
                    "error":true,
                    "message": errorMessages[0]
                });
            }else{
                res.status(Http.InternalServerError).json({
                    "error":true,
                    "message": "Internal Server Error"
                })
            }
        }
    }
}