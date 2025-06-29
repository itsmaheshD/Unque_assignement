import mongoose from 'mongoose';
//designing schema for  registering professor slots
const availabilitySchema = new mongoose.Schema({
  professor: { type: mongoose.Schema.Types.ObjectId,
     ref: 'User_type', 
     required: true },
  date: String,
  startTime: String,
  endTime: String, 
  isbook: { type: Boolean, default: false }
});

export default mongoose.model('Slot_register', availabilitySchema);