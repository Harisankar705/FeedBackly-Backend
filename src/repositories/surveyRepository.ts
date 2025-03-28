import SurveyModel from '../models/suveryModel';
import { ISurvey, ISurveyRepository } from '../interfaces/interfaces';
import { BaseRepository } from './baseRepository';
export class SurveyRepository extends BaseRepository<ISurvey> implements ISurveyRepository{
    constructor()
    {
        super(SurveyModel)
    }
}