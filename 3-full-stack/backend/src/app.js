import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
import alumnosRouter from './routes/alumnos.routes.js'
import authRouter from './routes/auth.routes.js'


config()

const PORT = process.env.PORT
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/alumnos', alumnosRouter);
app.use('/api', authRouter);


mongoose.connect(process.env.MONGO_KEY).then( () => console.log('Conectado a Mongo DB') );

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto",PORT)
})