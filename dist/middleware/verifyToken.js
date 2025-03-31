"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const statusCodes_1 = require("../utils/statusCodes");
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        res.status(statusCodes_1.STATUS_CODES.FORBIDDEN).json({ message: "Access Denied!" });
        return;
    }
    try {
        const isVerified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!isVerified.isAdmin)
            throw new Error();
        next();
    }
    catch (error) {
        next();
    }
};
exports.verifyToken = verifyToken;
