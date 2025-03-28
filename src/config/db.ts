import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const dbConnection=async():Promise<void>=>{
    try {
        const mongoUri=process.env.MONGODB
        if(!mongoUri)
        {
            throw new Error("No mongo db url")
        }
        await mongoose.connect(mongoUri)
    } catch (error) {
        console.log(error)
    }
}