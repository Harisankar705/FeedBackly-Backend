import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
dotenv.config()
export const adminLogin=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {email,password}=req.body
        console.log(req.body)
        const isEmailValid=email===process.env.ADMIN_EMAIL
        console.log("isEmailValid",isEmailValid)
        const isPasswordValid=await bcrypt.compare(password,process.env.ADMIN_PASS||'')
        console.log("isPasswordValid",isPasswordValid)

        if(!isEmailValid||!isPasswordValid)
        {
            throw new Error("Credentials not provided!")
        }
            const token=jwt.sign({id:'admin',isAdmin:true},process.env.JWT_SECRET as string,{expiresIn:'1h'})
            res.cookie('token',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV==='production',
                maxAge:3600000,
            })
           
      res.json({ success: true,user:{email:process.env.ADMIN_EMAIL,role:'admin'},token});
             return
    } catch (error) {
        next(error)
    }
}