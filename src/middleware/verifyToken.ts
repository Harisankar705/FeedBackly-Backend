import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { STATUS_CODES } from '../utils/statusCodes';
export const verifyToken=async(req:Request,res:Response,next:NextFunction)=>{
    const token=req.header('Authorization')?.split(' ')[1]
    if(!token)
    {
        return res.status(STATUS_CODES.FORBIDDEN).json({message:"Access Denied!"})
    }
    try {
        const isVerified=jwt.verify(token,process.env.JWT_SECRET)
        if(!isVerified.isAdmin)throw new Error()
        next()
    } catch (error) {
        next()
    }
}