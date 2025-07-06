import mongoose from 'mongoose';

// declaration
const MONGODB_URI = process.env.MONGODB_URI;

// check if mongodb is not found
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI not found in .env.local');
}

// logging
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
});
mongoose.connection.on('error', () => {
  console.log('Mongoose is error');
});

// function connection to MongoDB
export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error', error);
    throw error;
  }
}
