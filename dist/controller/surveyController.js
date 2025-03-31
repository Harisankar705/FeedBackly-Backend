"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyController = void 0;
const statusCodes_1 = require("../utils/statusCodes");
class SurveyController {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    async submitSurvey(req, res, next) {
        try {
            const result = await this.surveyService.submitSurvey(req.body);
            res.status(statusCodes_1.STATUS_CODES.CREATED).json({ message: "Survey submitted!", data: result });
        }
        catch (error) {
            next(error);
        }
    }
    async getSurveys(req, res, next) {
        try {
            const surveys = await this.surveyService.getSurveys();
            res.status(statusCodes_1.STATUS_CODES.OK).json({ message: "Success", data: surveys });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SurveyController = SurveyController;
