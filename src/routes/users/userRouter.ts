import { userController } from "@/controllers/user_Controller/UserController";
import { CreateUserSchema } from "@/dtos/request_Dtos/users_dtos/Create_User_Schema";
import { validateRequest } from "@/middlewares/ValidateRequest";
import express from 'express';
import multer from "multer";


export const userRouter = express.Router();

// appRouter.get("/user",(req,res)=>{
//     res.status(200).json({
//         message:"Server is running smooth"
//     });
// })

const upload = multer()
userRouter.get('/users', userController.index);
userRouter.post('/users',upload.none(),validateRequest(CreateUserSchema), userController.create);
