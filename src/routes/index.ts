import express from "express";
import { userRouter } from "./users/userRouter";

// user this appRouter to define and start every route
export const appRouter = express.Router();

appRouter.use(userRouter)