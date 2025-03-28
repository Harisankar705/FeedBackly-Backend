import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
export const adminLogin=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {username,password}=req.body
        if(!username||!password)
        {
            throw new Error("Credentials not provided!")
        }
        if(username===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASS)
        {
            const token=jwt.sign({isAdmin:true},process.env.JWT_SECRET,{expiresIn:'1h'})
            return res.json({token})
        }
    } catch (error) {
        next(error)
    }
}