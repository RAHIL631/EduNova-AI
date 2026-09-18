import mongoose from 'mongoose';
import { env } from './env';

export const connectDatabase = async (): Promise<boolean> => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
    return true;
  } catch (error: any) {
    console.error(`[Database] MongoDB connection error: ${error?.message || error}`);
    console.warn('[Database] Running in offline/disconnected database mode. Ensure MongoDB is running if performing database persistence.');
    return false;
  }
};

export const isDatabaseConnected = (): boolean => {
  return mongoose.connection.readyState === 1;
};