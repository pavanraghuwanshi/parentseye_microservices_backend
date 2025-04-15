import amqp from 'amqplib';
import config from '../config/env.js';

let channel;

export async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(config.RABBITMQ_URL);
    channel = await connection.createChannel();
    await channel.assertExchange(config.EXCHANGE_NAME, 'fanout', { durable: true });
    console.log('📡 Connected to RabbitMQ');
  } catch (error) {
    console.error('RabbitMQ connection error:', error);
    process.exit(1);
  }
}

export async function publishUserEvent(eventType, userData) {
  try {
    const eventPayload = {
      eventId: crypto.randomUUID(),
      eventType,
      timestamp: new Date().toISOString(),
      data: userData
    };

    const message = Buffer.from(JSON.stringify(eventPayload));
    channel.publish(config.EXCHANGE_NAME, '', message);
    console.log(`📤 Published ${eventType} event`);
  } catch (error) {
    console.error('Error publishing event:', error);
  }
}