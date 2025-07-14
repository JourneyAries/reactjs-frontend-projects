 import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI) {
  throw new Error ('MONGODB_URI not found in .env.local')
}

// logging
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})

mongoose.connection.on('error', () => {
  console.error('Mongoose is error');
})

export const connectDB = async () => {
  if(mongoose.connection.readyState>=1) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Mongodb connected');
  } catch (error) {
    console.error('Mongodb connection error ',error);
    throw error;
  }
} 

