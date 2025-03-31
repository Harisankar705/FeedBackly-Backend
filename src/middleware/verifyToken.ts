import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { STATUS_CODES } from '../utils/statusCodes';
export const verifyToken=(req:Request,res:Response,next:NextFunction):void=>{
    const token=req.header('Authorization')?.split(' ')[1]
    if(!token)
    {
         res.status(STATUS_CODES.FORBIDDEN).json({message:"Access Denied!"})
         return
    }
    try {
        const isVerified=jwt.verify(token,process.env.JWT_SECRET as string) as {isAdmin?:boolean}
        if(!isVerified.isAdmin)throw new Error()
        next()
    } catch (error) {
        next()
    }
}