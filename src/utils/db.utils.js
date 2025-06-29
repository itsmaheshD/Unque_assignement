import dotenv from 'dotenv';

dotenv.config();
import mongoose from 'mongoose';
console.log('MONGO_URI:', process.env.MONGO_URI);

export const connectDB = async () => {
  if(!process.env.MONGODB_URL){
    throw new Error('MONFO ERROR');
  }
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB connected');
};