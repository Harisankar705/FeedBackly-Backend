import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { errorHandler } from './middleware/errorMiddleware'
import { surveyRoutes } from './routes/surveyRoutes'
import { authRoutes } from './routes/authRoutes'
import { dbConnection } from './config/db'
const app=express()
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))
dbConnection()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(surveyRoutes)
app.use(authRoutes)
app.use(errorHandler)

const PORT=process.env.PORT
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))