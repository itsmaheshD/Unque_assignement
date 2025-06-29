import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'professor'], required: true }
});

export default mongoose.model('User_type', userSchema);
//console.log(userSchema.obj);