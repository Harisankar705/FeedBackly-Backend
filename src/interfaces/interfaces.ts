import { NextFunction } from 'express';
export interface ISurvey{
    name:string,
    gender:'Male'|'Female'|'Others'
    phonenumber:number,
    nationality:string,
    address:string,
    message:string,
    email:string

}
export interface CustomError extends Error{
    status?:number
}
export interface ISurveyRepository extends IBaseRepository<ISurvey>{}
export interface ISurveyService<T>{
    submitSurvey(data:T):Promise<T>
    getSurveys():Promise<T[]>
}
export interface ISurveyController{
    submitSurvey(req:Request,res:Response,next:NextFunction):Promise<void>
    getSurveys(req:Request,res:Response,next:NextFunction):Promise<void>
}
export interface IBaseRepository<T>{
    create(data:T):Promise<T>
    findAll():Promise<T[]>

}