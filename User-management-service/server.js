import express from 'express';
import mongoose from 'mongoose';
import config from './src/config/env.js';
import {connectDB} from './src/config/db.js';
import { connectRabbitMQ } from './src/events/publisher.js';
import MainRouter from './src/routes/main.route.js';


const app = express();

// ------------Database Connection----------------
await connectDB();

// -------------Message Broker Connection----------------
// await connectRabbitMQ();

//------------------------ Middleware------------------------
app.use(express.json());

// --------------------------Routes----------------------
app.use('/api', MainRouter);


app.listen(config.PORT, () => {
  console.log(`💻 User Service running on port ${config.PORT}`);
});