import dotenv from 'dotenv';

dotenv.config();
import mongoose from 'mongoose';
console.log('MONGO_URI:', process.env.MONGO_URI);

export const connectDB = async () => {
 
  await mongoose.connect("mongodb://localhost:27017/Unque", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB connected');
};