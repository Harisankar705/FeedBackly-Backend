"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyService = void 0;
class SurveyService {
    constructor(surveyRepository) {
        this.surveyRepository = surveyRepository;
    }
    async submitSurvey(data) {
        return await this.surveyRepository.create(data);
    }
    async getSurveys() {
        return await this.surveyRepository.findAll();
    }
}
exports.SurveyService = SurveyService;
