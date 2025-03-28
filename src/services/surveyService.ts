import { ISurvey, ISurveyRepository, ISurveyService } from "../interfaces/interfaces";

export class SurveyService implements ISurveyService<ISurvey>{
    constructor(private surveyRepository:ISurveyRepository){}
    async submitSurvey(data:ISurvey):Promise<ISurvey>{
        return await this.surveyRepository.create(data)
    }
    async getSurveys():Promise<ISurvey[]> {
        return await this.surveyRepository.findAll()
        
    }
}