"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controller/adminController");
exports.authRoutes = express_1.default.Router();
exports.authRoutes.post('/login', adminController_1.adminLogin);
