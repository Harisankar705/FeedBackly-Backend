import express from 'express'
import { verifyToken } from '../middleware/verifyToken'
import { adminLogin } from '../controller/adminController'
export const authRoutes=express.Router()
authRoutes.post('/login',adminLogin)