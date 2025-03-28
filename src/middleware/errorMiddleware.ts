import {Request,Response,NextFunction} from 'express'
import { CustomError } from '../interfaces/interfaces'
import { STATUS_CODES } from '../utils/statusCodes'
export const errorHandler=(err:CustomError,req:Request,res:Response,next:NextFunction)=>{
    console.log(err.stack)
    res.status(err.stack||STATUS_CODES.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:err.message||"Something went wrong"
    })

}