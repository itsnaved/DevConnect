import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
dotenv.config();

const app= express();
console.log("Trying to start app.js");


app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

export default app;