import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User_type', required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'User_type', required: true },
  availability: { type: mongoose.Schema.Types.ObjectId, ref: 'Availability', required: true },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});

export default mongoose.model('Appointment_slot', appointmentSchema);