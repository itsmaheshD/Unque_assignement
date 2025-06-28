import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: String, // e.g., '2025-06-29'
  startTime: String, // e.g., '10:00'
  endTime: String,   // e.g., '10:30'
  isBooked: { type: Boolean, default: false }
});

export default mongoose.model('Availability', availabilitySchema);