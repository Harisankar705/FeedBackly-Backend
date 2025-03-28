import { STATUS_CODES } from '../utils/statusCodes';
import { Request,Response,NextFunction } from 'express';
import { SurveyService } from '../services/surveyService';
import { ISurveyController } from './../interfaces/interfaces';
export class SurveyController implements ISurveyController{
    constructor(private surveyService:SurveyService){}
    async submitSurvey(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
            const result=await this.surveyService.submitSurvey(req.body)
            res.status(STATUS_CODES.CREATED).json({message:"Survey submitted!",data:result})
        } catch (error) {
            next(error)
        }
    }
    async getSurveys(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
            const surveys=await this.surveyService.getSurveys()
            res.status(STATUS_CODES.OK).json({message:"Success",data:surveys})
        } catch (error) {
            next(error)
        }
    }

}
