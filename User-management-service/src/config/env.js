import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 3001,
  MONGO_URI: process.env.MONGO_URI,
  RABBITMQ_URL: process.env.RABBITMQ_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME || 'user_events'
};