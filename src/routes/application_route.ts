import { applicationController } from '@/controllers/application_controller/ApplicationController';
import express from 'express';






export const applicationRouter = express.Router();

applicationRouter.get('/application',applicationController.index);
applicationRouter.post('/application');