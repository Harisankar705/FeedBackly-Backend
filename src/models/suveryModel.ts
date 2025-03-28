import mongoose, { Schema } from "mongoose";
import { ISurvey } from "../interfaces/interfaces";
const surveySchema=new Schema<ISurvey>({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['Male','Female','Others'],
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

})
const SurveyModel=mongoose.model('survey',surveySchema)
export default SurveyModel