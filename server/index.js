import express from 'express';
import Connection from './databse/db.js';
import cors from 'cors';
import morgan from 'morgan';
import allRoutes from './routes/index.js'

const app = express()

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

//routes
app.use('/api', allRoutes)

const PORT = 8000;

Connection();

app.listen(PORT, ()=> console.log("Your server is running succesfully"));