import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User_type', required: true },
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User_type', required: true },
  slot: { type: mongoose.Schema.Types.ObjectId, ref: 'Availability', required: true },
  status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' }
});

export default mongoose.model('Appointment_slot', appointmentSchema);