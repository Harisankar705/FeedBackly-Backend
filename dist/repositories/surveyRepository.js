"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyRepository = void 0;
const suveryModel_1 = __importDefault(require("../models/suveryModel"));
const baseRepository_1 = require("./baseRepository");
class SurveyRepository extends baseRepository_1.BaseRepository {
    constructor() {
        super(suveryModel_1.default);
    }
}
exports.SurveyRepository = SurveyRepository;
