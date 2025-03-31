"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConnection = async () => {
    try {
        const mongoUri = process.env.MONGODB;
        if (!mongoUri) {
            throw new Error("No mongo db url");
        }
        await mongoose_1.default.connect(mongoUri);
    }
    catch (error) {
        console.log(error);
    }
};
exports.dbConnection = dbConnection;
