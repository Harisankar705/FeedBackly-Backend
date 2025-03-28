import express from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/errorMiddleware'
import { surveyRoutes } from './routes/surveryRoutes'
import { authRoutes } from './routes/authRoutes'
const app=express()
app.use(express.json())
app.use(surveyRoutes)
app.use(authRoutes)
app.use(errorHandler)
const PORT=process.env.PORT
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))