"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyRoutes = void 0;
const surveyRepository_1 = require("../repositories/surveyRepository");
const express_1 = __importDefault(require("express"));
const surveyService_1 = require("../services/surveyService");
const surveyController_1 = require("../controller/surveyController");
exports.surveyRoutes = express_1.default.Router();
const surveyRepository = new surveyRepository_1.SurveyRepository();
const surveyService = new surveyService_1.SurveyService(surveyRepository);
const surveyController = new surveyController_1.SurveyController(surveyService);
exports.surveyRoutes.route('/survey').post(surveyController.submitSurvey.bind(surveyController))
    .get(surveyController.getSurveys.bind(surveyController));
