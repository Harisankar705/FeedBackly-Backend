import { verifyToken } from './../middleware/verifyToken';
import { SurveyRepository } from '../repositories/surveyRepository';
import express from 'express'
import { SurveyService } from '../services/surveyService'
import { SurveyController } from '../controller/surveyController';
export const surveyRoutes=express.Router()
const surveyRepository=new SurveyRepository()
const surveyService=new SurveyService(surveyRepository)
const surveyController=new SurveyController(surveyService)
surveyRoutes.route('/survey').post(surveyController.submitSurvey.bind(surveyController))
.get(surveyController.getSurveys.bind(surveyController))