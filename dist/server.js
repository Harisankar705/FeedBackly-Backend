"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const surveyRoutes_1 = require("./routes/surveyRoutes");
const authRoutes_1 = require("./routes/authRoutes");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
(0, db_1.dbConnection)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(surveyRoutes_1.surveyRoutes);
app.use(authRoutes_1.authRoutes);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
