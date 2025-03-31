"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
dotenv_1.default.config();
const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const isEmailValid = email === process.env.ADMIN_EMAIL;
        console.log("isEmailValid", isEmailValid);
        const isPasswordValid = await bcryptjs_1.default.compare(password, process.env.ADMIN_PASS || '');
        console.log("isPasswordValid", isPasswordValid);
        if (!isEmailValid || !isPasswordValid) {
            throw new Error("Credentials not provided!");
        }
        const token = jsonwebtoken_1.default.sign({ id: 'admin', isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
        });
        res.json({ success: true, user: { email: process.env.ADMIN_EMAIL, role: 'admin' }, token });
        return;
    }
    catch (error) {
        next(error);
    }
};
exports.adminLogin = adminLogin;
